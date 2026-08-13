# Collab-Regeln für den Page-Build

Astro-Website für Österreich. Schwesterprojekt: `hsp-derjob-de`.

Aktuell arbeitet **eine Person allein** am Projekt. Deshalb wird direkt auf
`main` gearbeitet, ohne Branch und ohne Pull Request.

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
```

Danach wird direkt auf `main` gearbeitet und committet. Jeder Push baut sofort
die Produktionsseite bei Vercel.

**Das gilt nur, solange eine Person allein arbeitet.** Zwei Bedingungen kehren
den Ablauf wieder um:

1. **Sobald eine zweite Person dazukommt** — sonst ueberschreiben sich zwei
   Sessions gegenseitig, die nichts voneinander wissen.
2. **Sobald die Seite live ist** — ab dann ist `main` das, was Bewerber sehen.
   Ein Fehler ist dann sofort oeffentlich.

In beiden Faellen wieder so arbeiten:

```
git checkout -b <branchname>
```

und die Branch-Protection auf `main` in den Repo-Einstellungen wieder
einschalten (Settings -> Branches). Branchname beschreibt die Aenderung, nicht
die Person, und bleibt unter 25 Zeichen (sonst wird die Vercel-Preview-URL
abgeschnitten): `nav-mobile-fix`, nicht `gabriel-test`.

## Was bei jeder Aenderung trotzdem gilt

Ohne Pull Request faellt der Zwischenschritt weg, in dem jemand drueberschaut.
Deshalb vor dem Push:

```
npm run build
```

Laeuft der Build nicht durch, ist die Produktionsseite nach dem Push kaputt.

## Design-Regel: Bilder auf dem Handy

Mehrere Bilder oder Karten nebeneinander werden auf dem Handy **niemals
untereinander gestapelt**, sondern immer als waagerechter Slider gezeigt.
Sonst scrollt man endlos. Zwei fertige Bausteine dafür:

- `.karten-slider` (CSS-Klasse) ersetzt `grid` an der Liste. Auf dem Handy
  waagerecht mit Einrasten, ab `sm` greifen die `grid-cols-*`-Klassen wieder.
- `LogoSlider.astro` für Logoreihen: zeigt eins nach dem anderen, wechselt
  automatisch durch, mit Positionspunkten.

Einzelne Bilder in Bild-Text-Blöcken sind davon nicht betroffen.
