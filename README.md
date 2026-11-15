# Alltagsfinder Shop

Deutschsprachiger Produktideen- und Affiliate-Demokatalog mit 27 Themenwelten.

## Status
- Testversion / Demo: Die Einträge sind noch keine echten Kaufangebote.
- Keine aktiven Partnerlinks oder Bestellfunktionen.
- Suchmaschinenindexierung ist während der Testphase über `robots.txt` und `_headers` deaktiviert.
- Rechtliche Seiten müssen vor einem regulären Affiliate-Verkaufsstart geprüft und finalisiert werden.

## Lokale Vorschau
`index.html` in einem Browser öffnen. Die Startseite ist eigenständig (CSS und Produktdaten inline). Die Unterseiten verwenden `style.css` und `info.js`.

## Cloudflare Pages (Git-Integration)
1. Im Cloudflare-Dashboard **Workers & Pages → Create application → Pages → Connect to Git** wählen.
2. GitHub-Konto `djalpha2000music-bit` und Repository `alltagsfinder-shop` auswählen.
3. **Production branch:** `main`. **Framework preset:** `None`. **Build command:** leer. **Build output directory:** `/` (Repository-Wurzel).
4. Deployment prüfen und erst dann die neue Shopadresse verwenden.

**Wichtig:** Das bereits per ZIP hochgeladene Cloudflare-Pages-Projekt kann nicht nachträglich auf Git-Integration umgestellt werden. Dafür ist ein neues Cloudflare-Pages-Projekt nötig.

## Pflege
Shopinhalte und Designs künftig über GitHub-Commits aktualisieren; Git-verbundenes Cloudflare Pages veröffentlicht den gewählten Branch automatisch. Keine echten Partnerlinks ohne Partnerfreigabe, Kennzeichnung und Prüfung hinzufügen.
