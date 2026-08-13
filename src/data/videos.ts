/**
 * Adressen der drei Interviewfilme.
 *
 * Sie liegen im Repo unter public/videos. Diese drei zusammen rund 20 MB,
 * mit dem Rundgangfilm auf der Startseite rund 27 MB im ganzen Ordner.
 * Das ist vertretbar und spart den Umweg ueber einen zweiten Speicherort.
 *
 * Vercel deckelt ein Deployment bei 100 MB. Wenn spaeter weitere Filme
 * dazukommen, wird es eng - dann nach Vercel Blob umziehen.
 *
 * Falls sie spaeter doch nach Vercel Blob wandern: hier die Adressen
 * eintragen, das ist die einzige Stelle, die dafuer angefasst wird.
 */
export const videos = {
  anfrage:       '/videos/anfrage.mp4',        // 1:42 - Kennenlernprozess
  arbeitsalltag: '/videos/arbeitsalltag.mp4',  // 2:20 - Alltag im Job
  stimmen:       '/videos/stimmen.mp4',        // 1:40 - Warum die Leute dabei sind
} as const;
