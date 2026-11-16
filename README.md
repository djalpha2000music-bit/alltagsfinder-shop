# Alltagsfinder Shop

Öffentlich erreichbares Produktideen- und Affiliate-Portal im Aufbau mit 27 Themenwelten, 668 Produktideen und eigenständigen Kaufhilfen.

## Status
- **6 aktive, gekennzeichnete Amazon-Partnerangebote** (DOQAUS DJ-Kopfhörer, AlphaTheta DDJ-FLX2 DJ-Controller, Mikrofonangebot mit noch offener Modellbezeichnung, Behringer U-PHORIA UMC22 USB-Audiointerface, EUROLITE LED PARty TCL Spot und PreSonus Eris 3.5 Gen 2 Studiomonitore) und 662 weitere unverbindliche Produktideen. Keine eigene Bestellfunktion.
- **`angebote.html`** zeigt ausschließlich freigegebene Händlerangebote. Neue Produkte erscheinen dort automatisch, wenn der Sammelimport `partner-offers.js` neu erzeugt. Die Startseite enthält eine auffällige Produktvorschau. Die Angebotsseite nutzt selbst erstellte, klar gekennzeichnete Referenzillustrationen für DJ-Controller, Mikrofon, Audiointerface, LED-Partyspot und Studiolautsprecher statt Amazon-Produktfotos.
- **11 eigenständige Kaufhilfe-Seiten plus vier Grundlagenartikel** sind unter `ratgeber.html` verlinkt.
- **DJ-Setup-Beratung** auf `musik-dj.html`: Auswahl DJ-Einstieg, Aufnehmen oder Ansagen/Streaming, ohne Anmeldung oder Datenspeicherung; zeigt nur vorhandene freigegebene Partnerangebote mit gekennzeichneten Referenzbildern.
- Auf Unterseiten verlinken Navigation und Footer zum Angebotsbereich; Favoriten lassen sich über `index.html?favorites=1#entdecken` öffnen.
- Referenzillustrationen: `assets/doqaus-kopfhoerer-referenz.webp`, `assets/dj-controller-referenz.svg`, `assets/mikrofon-referenz.svg`, `assets/audiointerface-referenz.svg`, `assets/eurolite-led-party-tcl-referenz.svg` und `assets/presonus-eris-35-gen2-referenz.svg`. Das tatsächliche Produkt ist ausschließlich auf der Händlerseite abgebildet.
- Partnerlink-Sammelimport über `data/affiliate-offers.csv` und GitHub Actions; keine API-Schlüssel im Repository.
- **Google-Vorbereitung:** Alle 20 Sitemap-Seiten enthalten passende Canonical-URLs; `robots.txt` meldet die Sitemap. Die Eigentumsbestätigung in Google Search Console wurde am 16.11.2026 nachweislich durchgeführt. Die Suchmaschinen-Sperre wurde nach ausdrücklicher Betreiberfreigabe am 16.11.2026 entfernt. Ein Google-Live-Test derselben Tagesversion bestätigt die grundsätzliche Indexierbarkeit der Startseite. Eine Aufnahme in den Index ist noch nicht bestätigt.
- Die globale `noindex`-Regel in `_headers` wurde entfernt. `robots.txt` verweist auf `sitemap.xml` mit 20 URLs; `_headers` legt für die Sitemap ausdrücklich `application/xml` fest. Die Sitemap wurde am 16.11.2026 in Google Search Console eingereicht, meldete zunächst aber „Sitemap konnte nicht gelesen werden“. Der manuelle Indexierungsantrag wurde wegen Tageskontingent nicht angenommen. Die automatisierte GitHub-Qualitätsprüfung ist erfolgreich.
- Das Kontaktformular über Form.taxi (`kontakt.html`) ist angeschlossen: Erfolgsanzeige von Form.taxi und Nachrichteneingang im verbundenen Gmail-Konto am 16.11.2026 bestätigt. Der 12-seitige Form.taxi-AV-Vertrag wurde am 16.11.2026 erstellt, heruntergeladen und auf die beteiligten Parteien/Grunddaten geprüft; keine anwaltliche Freigabe. Die Geschäftsanschrift wurde vom Betreiber bestätigt, ebenso die Shop-Adresse in Amazon PartnerNet. Cloudflare Web Analytics ist aktiviert und in den Datenschutzhinweisen beschrieben. Offen bleiben die Form.taxi-Speicher-/Löscheinstellungen, tatsächliche Cloudflare-Datenschutzverträge/Logverarbeitung und Analytics-Prüfung, die Ziel-/Trackingprüfung der fünf Amazon-Kurzlinks (der Kopfhörer-Link enthält den bestätigten Tracking-Tag), mögliche weitere Impressums-Pflichtangaben und die abschließende rechtliche Prüfung.

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
Cloudflare Pages ist seit 15.11.2026 als Git-verbundenes Projekt `alltagsfinder-auto` eingerichtet. Cloudflare zeigt für `alltagsfinder-auto` automatische Produktionsbereitstellungen vom Branch `main`. Ein Screenshot vom 16.11.2026 bestätigt die Produktion mit Commit `e0fb1da`; spätere GitHub-Änderungen werden automatisch bereitgestellt und müssen im Livebetrieb geprüft werden.

## Bildregel für neue Partnerprodukte
Neue Partnerangebote möglichst direkt mit einer **eigens erstellten, zum Produkttyp passenden Referenzillustration** ausstatten. Modell, Marke und genaue Optik niemals aus dem Kurzlink erraten. Bilder als „REFERENZ-/SYMBOLBILD“ und mit sprechendem Alt-Text kennzeichnen. Amazon-Originalbilder nur bei nachgewiesener Lizenz bzw. erlaubter offizieller Einbindung verwenden. Ohne Bildrechte kein ungefragtes Kopieren externer Händlerfotos.

## Browser-Cache nach Partnerlink-Updates
Für `index.html`, `angebote.html`, `musik-dj.html` und `partner-offers.js` erzwingt `_headers` eine Revalidierung. Die Seiten enthalten zusätzlich eine Versionskennung am Partnerangebots-Skript, damit Browser nicht die alte Demo-Karte aus dem Cache verwenden. Bei einer Freigabe bitte Skriptversion und Partnerliste synchron aktualisieren; weiter keine ungeprüften Modellbehauptungen veröffentlichen.
