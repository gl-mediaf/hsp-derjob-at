/**
 * Kennungen der Filme auf YouTube.
 *
 * Frueher lagen die Dateien als MP4 im Ordner public/videos und wogen
 * zusammen 27 MB. Seit sie auf dem eigenen YouTube-Kanal liegen, holt der
 * Browser sie von dort - und zwar erst, wenn jemand auf Abspielen tippt.
 *
 * Die Standbilder bleiben bewusst bei uns im Ordner public/videos. Sie sind
 * klein, sehen besser aus als die Vorschaubilder von YouTube, und vor allem
 * geht dadurch vor dem Klick keine Anfrage an Google.
 *
 * Die Kennung ist der Teil hinter youtu.be/ in der Adresse.
 */
export const videos = {
  rundgang:      '-wOUb7opqPk',  // "Einblicke ins Fundraising"  - Startseite
  anfrage:       'l3ksGFkfiX4',  // "So lernst du uns kennen!"   - /geld
  arbeitsalltag: 'RSx-P2qevfg',  // "Der Alltag"                 - /fundraising
  stimmen:       '1xsphAXXCvc',  // "Testimonials Karriere AT"   - /erlebnis
} as const;
