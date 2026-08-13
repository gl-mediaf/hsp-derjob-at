# Collab-Regeln für den Page-Build

Astro-Website für Österreich. Schwesterprojekt: `hsp-derjob-de`.

Zwei Personen arbeiten parallel über getrennte Claude-Sessions, die nichts
voneinander wissen. Deshalb ist der Ablauf verbindlich.

## Welches Repo? (bitte vor dem ersten Push pruefen)

| Ordner | Repo |
|---|---|
| `hsp-homepage-de` | `github.com/gl-mediaf/hsp-derjob-de` |
| `hsp-homepage-at` | `github.com/gl-mediaf/hsp-derjob-at` |

**Es gibt zwei aehnlich benannte Repos, in die nichts gehoert:**
`hsp-landingpage` und `hsp-landingpage-at`. Das sind andere Projekte mit
eigener Geschichte, ohne gemeinsame Wurzel mit diesem hier. Ein Merge dorthin
wuerde entweder scheitern oder fremde Arbeit ueberschreiben.

Im Zweifel kurz nachsehen:

```
git remote -v
```

## Vor jeder Arbeit

```
git checkout main
git pull
git checkout -b <branchname>
```

**Nie direkt auf `main` arbeiten.** Auch nicht „nur schnell". Jede Änderung läuft
über einen Branch und einen Pull Request.

Branchname beschreibt die Änderung, nicht die Person, und bleibt unter 25 Zeichen
(sonst wird die Vercel-Preview-URL abgeschnitten): `nav-mobile-fix`, nicht
`gabriel-test`.

## Design-Regel: Bilder auf dem Handy

Mehrere Bilder oder Karten nebeneinander werden auf dem Handy **niemals
untereinander gestapelt**, sondern immer als waagerechter Slider gezeigt.
Sonst scrollt man endlos. Zwei fertige Bausteine dafür:

- `.karten-slider` (CSS-Klasse) ersetzt `grid` an der Liste. Auf dem Handy
  waagerecht mit Einrasten, ab `sm` greifen die `grid-cols-*`-Klassen wieder.
- `LogoSlider.astro` für Logoreihen: zeigt eins nach dem anderen, wechselt
  automatisch durch, mit Positionspunkten.

Einzelne Bilder in Bild-Text-Blöcken sind davon nicht betroffen.
