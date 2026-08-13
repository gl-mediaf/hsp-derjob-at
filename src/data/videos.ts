/**
 * Adressen der drei Interviewfilme.
 *
 * Sie liegen nicht im Repo, sondern bei Vercel Blob. Sobald eine Datei dort
 * hochgeladen ist, hier die Adresse eintragen - das ist die einzige Stelle,
 * die dafuer angefasst werden muss.
 *
 * Solange ein Eintrag leer bleibt, zeigt die Seite an dieser Stelle einen
 * sichtbaren Platzhalter statt eines Abspielknopfes.
 *
 * Hochladen: Vercel -> Projekt hsp-derjob-at -> Storage -> Blob -> Upload.
 * Danach die angezeigte Adresse (endet auf .mp4) hier einsetzen.
 *
 * Der Rundgang im Hero liegt bewusst im Repo (public/videos/rundgang.mp4):
 * Er laedt sofort beim Seitenaufruf, da waere ein zweiter Server nur ein
 * zusaetzlicher Verbindungsaufbau.
 */
export const videos = {
  anfrage:       '',   // Final_HSP_Anfrage       - 1:42 - Kennenlernprozess
  arbeitsalltag: '',   // Final_HSP_Arbeitsalltag - 2:20 - Alltag im Job
  stimmen:       '',   // Final_HSP               - 1:40 - Warum die Leute dabei sind
} as const;
