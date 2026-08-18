/**
 * Erzeugt vor dem Bauen kleinere Fassungen aller Bilder und schreibt eine
 * Masstabelle.
 *
 * Warum: Ohne das laedt ein Handy dieselbe 2400 Pixel breite Datei wie ein
 * grosser Monitor und rechnet sie auf 390 Pixel herunter - rund vier Fuenftel
 * der Daten sind verschwendet.
 *
 * Die Tabelle src/data/bildmasse.json haelt fest, wie gross jedes Original
 * wirklich ist und welche Stufen es dazu gibt. Der Baustein Bild.astro liest
 * sie aus. Das ist zuverlaessiger, als die Masse von Hand ins Markup zu
 * schreiben - dort standen an vielen Stellen falsche Werte.
 *
 * Die abgeleiteten Dateien landen in public/images/g/ und stehen in
 * .gitignore: Sie lassen sich jederzeit neu erzeugen und wuerden das Repo
 * sonst dauerhaft aufblaehen.
 *
 * Laeuft automatisch mit `npm run build`, auch bei Vercel.
 */
import sharp from 'sharp';
import { readdir, mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Auch die Videostandbilder aufnehmen - sie liegen in einem eigenen Ordner,
// werden aber genauso ueber den Bild-Baustein ausgeliefert.
const ORDNER = ['public/images', 'public/videos'];
const ZIEL   = 'public/images/g';
const TABELLE = 'src/data/bildmasse.json';
const STUFEN = [640, 1024, 1600];

// Kleine Grafiken lohnen den Aufwand nicht - Logos, Auszeichnungen, Symbole.
const MINDESTBREITE = 900;

await mkdir(ZIEL, { recursive: true });
await mkdir('src/data', { recursive: true });

const tabelle = {};
let gebaut = 0, uebersprungen = 0;

const alle = [];
for (const ordner of ORDNER) {
  for (const f of await readdir(ordner)) {
    if (f.endsWith('.webp')) alle.push([ordner, f]);
  }
}

for (const [ordner, datei] of alle.sort((a, b) => a[1].localeCompare(b[1]))) {
  const quelle = path.join(ordner, datei);
  const { width, height } = await sharp(quelle).metadata();
  if (!width || !height) continue;

  // Schluessel ist der Pfad ohne public und ohne Endung, damit Bilder aus
  // verschiedenen Ordnern nicht kollidieren.
  const name = quelle.replace(/^public\//, '').replace(/\.webp$/, '');
  const stufen = [];

  if (width >= MINDESTBREITE) {
    for (const breite of STUFEN) {
      if (breite >= width) continue;            // nie hochrechnen
      const ziel = path.join(ZIEL, `${name.replace(/\//g, '_')}-${breite}.webp`);
      stufen.push(breite);

      // Schon vorhanden und neuer als die Quelle? Dann nichts tun.
      try {
        const [a, b] = await Promise.all([stat(ziel), stat(quelle)]);
        if (a.mtimeMs >= b.mtimeMs) continue;
      } catch { /* gibt es noch nicht */ }

      await sharp(quelle)
        .resize({ width: breite, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(ziel);
      gebaut++;
    }
  } else {
    uebersprungen++;
  }

  tabelle[name] = { w: width, h: height, stufen };
}

await writeFile(TABELLE, JSON.stringify(tabelle, null, 1) + '\n');
console.log(`[bildgroessen] ${gebaut} Fassungen erzeugt, ${uebersprungen} kleine Bilder ausgelassen, ${Object.keys(tabelle).length} Einträge in der Tabelle`);
