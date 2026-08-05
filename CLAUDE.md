# Collab-Regeln für den Page-Build

Astro-Website für Österreich. Schwesterprojekt: `hsp-derjob-de`.

Zwei Personen arbeiten parallel über getrennte Claude-Sessions, die nichts
voneinander wissen. Deshalb ist der Ablauf verbindlich.

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
