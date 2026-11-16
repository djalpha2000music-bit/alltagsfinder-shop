# Alltagsfinder Shop

Deutschsprachiger Produktideen- und Affiliate-Shop im Testbetrieb mit 27 Themenwelten, einer Sammlung von 668 Produktideen und eigenständigen Ratgebern.

## Status
- **6 aktive, gekennzeichnete Amazon-Partnerangebote** (DOQAUS DJ-Kopfhörer, AlphaTheta DDJ-FLX2 DJ-Controller, Mikrofonangebot und USB-Audiointerface mit noch offener Modellbezeichnung, EUROLITE LED PARty TCL Spot und PreSonus Eris 3.5 Gen 2 Studiomonitore) und 662 weitere unverbindliche Produktideen. Keine eigene Bestellfunktion.
- **`angebote.html`** zeigt ausschließlich freigegebene Händlerangebote. Neue Produkte erscheinen dort automatisch, wenn der Sammelimport `partner-offers.js` neu erzeugt. Die Startseite enthält eine auffällige Produktvorschau. Die Angebotsseite nutzt selbst erstellte, klar gekennzeichnete Referenzillustrationen für DJ-Controller, Mikrofon, LED-Partyspot und Studiolautsprecher statt Amazon-Produktfotos.
- **11 eigenständige Kaufhilfe-Seiten plus vier Grundlagenartikel** sind unter `ratgeber.html` verlinkt.
- **DJ-Setup-Beratung** auf `musik-dj.html`: Auswahl DJ-Einstieg, Aufnehmen oder Ansagen/Streaming, ohne Anmeldung oder Datenspeicherung; zeigt nur vorhandene freigegebene Partnerangebote mit gekennzeichneten Referenzbildern.
- Auf Unterseiten verlinken Navigation und Footer zum Angebotsbereich; Favoriten lassen sich über `index.html?favorites=1#entdecken` öffnen.
- Referenzillustrationen: `assets/doqaus-kopfhoerer-referenz.webp`, `assets/dj-controller-referenz.svg`, `assets/mikrofon-referenz.svg`, `assets/audiointerface-referenz.svg`, `assets/eurolite-led-party-tcl-referenz.svg` und `assets/presonus-eris-35-gen2-referenz.svg`. Das tatsächliche Produkt ist ausschließlich auf der Händlerseite abgebildet.
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

## Bildregel für neue Partnerprodukte
Neue Partnerangebote möglichst direkt mit einer **eigens erstellten, zum Produkttyp passenden Referenzillustration** ausstatten. Modell, Marke und genaue Optik niemals aus dem Kurzlink erraten. Bilder als „REFERENZ-/SYMBOLBILD“ und mit sprechendem Alt-Text kennzeichnen. Amazon-Originalbilder nur bei nachgewiesener Lizenz bzw. erlaubter offizieller Einbindung verwenden. Ohne Bildrechte kein ungefragtes Kopieren externer Händlerfotos.

## Browser-Cache nach Partnerlink-Updates
Für `index.html`, `angebote.html`, `musik-dj.html` und `partner-offers.js` erzwingt `_headers` eine Revalidierung. Die Seiten enthalten zusätzlich eine Versionskennung am Partnerangebots-Skript, damit Browser nicht die alte Demo-Karte aus dem Cache verwenden. Bei einer Freigabe bitte Skriptversion und Partnerliste synchron aktualisieren; weiter keine ungeprüften Modellbehauptungen veröffentlichen.
