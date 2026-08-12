# Wortliste für hsp Der Job (Österreich)

Stand: 12.08.2026. Gilt für alle Texte der österreichischen Seite.

## Warum es diese Liste gibt

In Österreich läuft die Zusammenarbeit auf **selbständiger Basis**. Fundraiser
brauchen eine Gewerbeberechtigung und machen ihr Geld provisionsbasiert. Steht
auf der Seite etwas, das nach einem Angestelltenverhältnis klingt, entsteht ein
Widerspruch zur eigenen FAQ — und im schlechtesten Fall ein Hinweis auf
Scheinselbständigkeit.

Fast alle heiklen Wörter fallen in diese eine Kategorie: **Sprache, die eine
Anstellung beschreibt.**

---

## Rot — nicht verwenden

| Wort | Warum | Stattdessen |
|---|---|---|
| Gehalt, Gehälter | Setzt einen Arbeitsvertrag voraus | Provision, dein Geld |
| Lohn, Stundenlohn, Mindestlohn, entlohnen | Zeitbasierte Bezahlung durch einen Arbeitgeber | provisionsbasiert, leistungsbasiert |
| Mitarbeiter, Mitarbeiterin, Angestellte, Personal, Belegschaft | Beschreibt Beschäftigte | Fundraiser, Crew |
| Arbeitgeber, Arbeitnehmer, Chef, Vorgesetzte | Weisungsverhältnis | Auftraggeber, Partner |
| anstellen, Anstellung, Festanstellung, einstellen | Anstellung | Zusammenarbeit, Start |
| Arbeitsvertrag, Probezeit, Kündigung | Arbeitsrecht | Vereinbarung |
| Arbeitszeiten, Dienstplan, Schicht, Überstunden | Weisungsgebundene Zeiteinteilung | freie Zeiteinteilung, du entscheidest wann |
| Urlaub, Urlaubsanspruch, Krankenstand | Ansprüche aus Anstellung | Pause, du machst Pause wann du willst |

## Gelb — nur mit Bedacht

| Wort | Wann es geht | Wann nicht |
|---|---|---|
| Bewerbung, bewerben, bewirbst dich | Wenn du über **andere** Jobs schreibst („Bewerbungen ohne Antwort") | Nie für den eigenen Einstieg. Dort: anfragen, Anfrage, Kontakt aufnehmen |
| Lebenslauf | Im Vergleich zu klassischen Jobs | Nicht als eigene Anforderung |
| Verdienst, verdienen | In Überschriften und SEO-Texten üblich und verständlich | Nicht in Kombination mit Garantien |
| Bezahlung, bezahlt, Vergütung | Beschreibend | Nicht als „wir bezahlen dich" |
| Job, Ferienjob, Studentenjob | Etablierte Suchbegriffe, im gesamten Projekt bewusst verwendet | Nicht als „Arbeitsplatz" oder „Stelle" |
| Team | In Österreich vermeiden | Immer: **Crew** |

## Grün — bevorzugt

Crew · Fundraiser · selbständig · Gewerbeberechtigung · provisionsbasiert ·
leistungsbasiert · Provision · Einsatz · Anfrage · du entscheidest ·
kein Limit nach oben · Zusammenarbeit · Partner · Mission

---

## Zahlen: was in Österreich gilt

Das ist der häufigste inhaltliche Fehler, weil die deutschen Texte andere
Konditionen nennen.

**Falsch für Österreich:**

- garantierte Mindestprovision von 2.400 € in 4 Wochen
- 200 € Anreisebonus
- Tagesraten 40 / 75 / 110 / 145 € pro Arbeitstag
- Übernahme von Anreise-, Wohnungs- und Fahrzeugkosten

**Richtig für Österreich:**

- provisionsbasiert, kein Limit nach oben
- im Schnitt 3.300 € in 4 Wochen
- bis zu 1.000 € Prämie, wenn Freunde erfolgreich sind

---

## Befund aus dem Durchlauf vom 12.08.2026

Geprüft wurden alle Dateien unter `src/`.

**Nichts gefunden bei:** Gehalt, Arbeitgeber, Chef, Anstellung, Probezeit,
Kündigung, Kollegen, Urlaub, Schicht, Überstunden.

**Zu prüfen:**

1. `src/pages/studentenjob.astro:25` — „flexible Arbeitszeiten neben dem Studium"
2. `src/pages/studentenjob.astro:98` — „Flexible Arbeitszeiten: Konzentriere dich auf dein Studium …"
   → In Deutschland war das freigegeben. In Österreich klingt „Arbeitszeiten"
   nach Weisung. Vorschlag: „freie Zeiteinteilung neben dem Studium".
3. `src/pages/studentenjob.astro:18` — „Jobs, die dir nicht nur irgendeinen Stundenlohn bieten"
4. `src/pages/studentenjob.astro:26` — „mehr als nur Mindestlohn"
   → Beides beschreibt **andere** Jobs im Vergleich. Vertretbar, aber es sind
   die einzigen beiden Stellen mit Lohn-Vokabular auf der Seite.
5. `src/pages/geld.astro:89` — „Kein Bock auf Stundenlohn?"
   → Steht so wörtlich auf der österreichischen Originalseite. Bewusst behalten.
6. `src/pages/organisationen.astro:28` — „unsere Mitarbeiterinnen und Mitarbeiter"
   → Wörtliches Zitat von Mag. Haneschläger über das Personal des
   Österreichischen Roten Kreuzes. **Nicht ändern**, Zitate bleiben unangetastet.

**Bereits korrigiert** beim Aufbau der AT-Seite: die deutschen
Vergütungszusagen in vier Blogartikeln (2.400-€-Garantie, Anreisebonus,
Tagesraten) sowie „Deutschland" → „Österreich".

**Nicht geprüft, weil nicht im Projekt:** Impressum und Datenschutz. Beide
verlinken noch auf `hsp-derjob.de`.
