# Alltagsfinder Shop

Deutschsprachiger Produktideen- und Affiliate-Shop im Testbetrieb mit 27 Themenwelten, einer Sammlung von 668 Produktideen und eigenständigen Ratgebern.

## Status
- **1 aktives, gekennzeichnetes Amazon-Partnerangebot** (DOQAUS DJ-Kopfhörer) und 667 weitere unverbindliche Produktideen. Keine eigene Bestellfunktion.
- **11 eigenständige Kaufhilfe-Seiten plus vier Grundlagenartikel** sind unter `ratgeber.html` verlinkt.
- Der DOQAUS-Referenzbild-Asset liegt in `assets/doqaus-kopfhoerer-referenz.svg`, als generierte Illustration gekennzeichnet.
- Partnerlink-Sammelimport über `data/affiliate-offers.csv` und GitHub Actions; keine API-Schlüssel im Repository.
- Die Webseite bleibt testweise über `_headers` **noindex**. `robots.txt` erlaubt den Seitenzugriff für die Prüfung. Eine `sitemap.xml` ist vorbereitet.
- Die rechtlichen Pflichtangaben und ein weiterer unmittelbarer Kontaktweg müssen vor dem uneingeschränkten öffentlichen Start geprüft bzw. ergänzt werden.

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

## Automatische Veröffentlichung
Cloudflare Pages ist seit 15.11.2026 als Git-verbundenes Projekt `alltagsfinder-auto` eingerichtet. Diese README-Änderung dient als erster Auto-Deployment-Test; sie verändert die Shop-Oberfläche nicht.
