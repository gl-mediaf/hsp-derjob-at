/**
 * Werte fuer den Verdienstrechner.
 *
 * Grundlage ist die bestehende Grafik auf starten.hsp-derjob.at. Die Kurve
 * dort ist am Punkt "Ø 3.300 € nach 4 Wochen" verankert und laeuft bis rund
 * 5.500 €. Genau diese beiden Punkte treffen die Stufen unten.
 *
 * Die woechentlichen Zuwaechse steigen leicht an - das entspricht der Aussage
 * auf der Seite, dass man mit der Zeit besser und damit erfolgreicher wird.
 */
export const wochen = [
  { woche: 1, geld:  600 },
  { woche: 2, geld: 1500 },
  { woche: 3, geld: 2400 },
  { woche: 4, geld: 3300 },   // der ausgewiesene Schnitt
  { woche: 5, geld: 4400 },
  { woche: 6, geld: 5500 },
] as const;

/**
 * Was sich mit dem Betrag ausgeht. `ab` ist die Untergrenze in Euro.
 * Uebernommen von der bestehenden Grafik.
 *
 * `bild` ist freiwillig: Ohne Datei zeigt der Baustein eine gestaltete Flaeche
 * mit Sinnbild und Text. Sobald Fotos vorliegen, hier eintragen.
 */
export const belohnungen = [
  { ab:    0, sinnbild: '🎒', text: 'Wochenend-Trip finanziert',
    bild: '/images/lohn/wochenende.webp',  alt: 'Ein Zelt am See in den Bergen' },
  { ab: 1200, sinnbild: '🎪', text: 'Festival-Sommer komplett',
    bild: '/images/lohn/festival.webp',    alt: 'Menge vor einer Festivalbühne' },
  { ab: 1900, sinnbild: '✈️', text: 'Ein Monat Backpacking',
    bild: '/images/lohn/backpacking.webp', alt: 'Jemand mit Rucksack unterwegs' },
  { ab: 2700, sinnbild: '🚴', text: 'Neues Rennrad',
    bild: '/images/lohn/rennrad.webp',     alt: 'Ein Rennrad' },
  { ab: 3300, sinnbild: '☕', text: 'Siebträgermaschine',
    bild: '/images/lohn/kaffee.webp',      alt: 'Eine Siebträgermaschine' },
  { ab: 4500, sinnbild: '🌏', text: 'Drei Monate Südostasien',
    bild: '/images/lohn/fernreise.webp',   alt: 'Ein Strand in Südostasien' },
] as const;
