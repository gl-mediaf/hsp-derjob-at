import type { APIRoute } from 'astro';

// Diese Route laeuft als Serverfunktion, nicht als fertige HTML-Datei.
export const prerender = false;

/**
 * Nimmt das Anfrageformular entgegen und reicht es an den Make-Webhook weiter.
 *
 * Die Webhook-Adresse steht in der Umgebungsvariable MAKE_WEBHOOK_URL und
 * taucht nirgends im ausgelieferten Seitenquelltext auf. Wer sie auslesen
 * wollte, kaeme nur an diese Route - und die prueft vorher.
 */

const MAX = { vorname: 80, nachname: 80, email: 160, telefon: 40 };

function sauber(wert: unknown, grenze: number): string {
  if (typeof wert !== 'string') return '';
  // Steuerzeichen entfernen, danach Rand-Leerzeichen weg und kuerzen
  return wert.replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, grenze);
}

function istEmail(wert: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(wert);
}

function antwort(status: number, koerper: Record<string, unknown>) {
  return new Response(JSON.stringify(koerper), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let roh: Record<string, unknown>;

  try {
    const typ = request.headers.get('content-type') ?? '';
    if (typ.includes('application/json')) {
      roh = await request.json();
    } else {
      roh = Object.fromEntries(await request.formData());
    }
  } catch {
    return antwort(400, { ok: false, fehler: 'Anfrage konnte nicht gelesen werden.' });
  }

  // Honigtopf: ein fuer Menschen unsichtbares Feld. Nur Bots fuellen es aus.
  // Wir melden trotzdem Erfolg, damit der Bot nichts dazulernt.
  if (sauber(roh.website, 100) !== '') {
    return antwort(200, { ok: true });
  }

  const daten = {
    vorname:  sauber(roh.vorname,  MAX.vorname),
    nachname: sauber(roh.nachname, MAX.nachname),
    email:    sauber(roh.email,    MAX.email),
    telefon:  sauber(roh.telefon,  MAX.telefon),
  };

  const fehlend: string[] = [];
  if (daten.vorname.length  < 2) fehlend.push('vorname');
  if (daten.nachname.length < 2) fehlend.push('nachname');
  if (!istEmail(daten.email))    fehlend.push('email');
  // Ziffern zaehlen statt Zeichen: +43 660 123 45 67 hat viele Leerzeichen.
  if ((daten.telefon.match(/\d/g) ?? []).length < 6) fehlend.push('telefon');

  if (fehlend.length > 0) {
    return antwort(422, { ok: false, fehler: 'Bitte alle Felder ausfüllen.', felder: fehlend });
  }

  const ziel = import.meta.env.MAKE_WEBHOOK_URL;
  if (!ziel) {
    console.error('MAKE_WEBHOOK_URL ist nicht gesetzt - Anfrage konnte nicht zugestellt werden.');
    return antwort(500, { ok: false, fehler: 'Der Versand ist gerade nicht möglich.' });
  }

  const nutzlast = {
    ...daten,
    quelle:    'hsp-derjob.at',
    seite:     sauber(roh.seite, 200),
    zeitpunkt: new Date().toISOString(),
    ip:        clientAddress ?? '',
  };

  try {
    const abbruch = AbortSignal.timeout(10_000);
    const res = await fetch(ziel, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nutzlast),
      signal: abbruch,
    });

    if (!res.ok) {
      // Sehr wichtig: Bei einem Fehler NICHT so tun, als sei alles gut.
      // Genau daran sind auf der alten Seite alle Anfragen verloren gegangen.
      console.error('Make hat abgelehnt:', res.status, (await res.text()).slice(0, 300));
      return antwort(502, { ok: false, fehler: 'Der Versand ist gerade nicht möglich.' });
    }
  } catch (e) {
    console.error('Make nicht erreichbar:', e);
    return antwort(502, { ok: false, fehler: 'Der Versand ist gerade nicht möglich.' });
  }

  return antwort(200, { ok: true });
};

// Andere Methoden sauber abweisen.
export const ALL: APIRoute = () =>
  new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
