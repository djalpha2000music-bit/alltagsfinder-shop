# Alltagsfinder – Freigabe- und Betriebscheck

Stand: 16. November 2026. **Die Website ist technisch weiter ausgebaut, befindet sich aber weiterhin im Testbetrieb.**

## Erledigt und in GitHub umgesetzt

- [x] 668 eindeutige Produktideen in 27 Kategorien
- [x] 11 ausführliche eigenständige Ratgeber plus vier Grundlagenartikel
- [x] Funktionierende Produktkatalog-Logik mit Suche, Filtern, Merkliste und Vergleich (automatische Codeprüfung; Browserbedienung noch extern prüfen)
- [x] Ein vom Betreiber über Amazon Mobile GetLink erzeugter Link für DOQAUS DJ-Kopfhörer im geprüften Sammelbestand
- [x] Echtes WebP-Referenzbild der Kopfhörer unter `assets/doqaus-kopfhoerer-referenz.webp`, markiert als generierte Illustration – keine unberechtigt kopierten Amazon-Fotos
- [x] Neue `angebote.html`: nur freigegebene Händlerangebote, dynamische Anzeige weiterer Produkte anhand der von GitHub Actions erzeugten `partner-offers.js`
- [x] Klare Werbekennzeichnungen, Affiliate-Offenlegung und Hinweise auf Referenzbilder, fehlende eigene Produkttests und beim Händler zu prüfende Preise
- [x] Hauptnavigation, Unterseiten, Merkliste-Direktlink und Ratgeber-Einstiege verbessert
- [x] Sammelimport per `data/affiliate-offers.csv` und `tools/build-offers.mjs` mit Amazon-Hostprüfung; keine Zugangsdaten im Frontend
- [x] Automatische Qualitätsprüfung `tools/check-site.mjs`: Katalog, Bild-Datei, generierte Angebote, Navigation, Rechtslinks, 11 Ratgeber und JavaScript-Syntax
- [x] GitHub Actions: letzte Qualitätsprüfung erfolgreich, Run 43820705244
- [x] Cloudflare Pages über `main` Git-verbunden laut vorherigem Deployment, Sitemap vorbereitet

## Unverzichtbare externe Schritte vor uneingeschränkter Bewerbung und SEO-Freigabe

- [ ] **PartnerNet-Website-Liste prüfen:** Unter PartnerNet-Kontoeinstellungen sicherstellen, dass `https://alltagsfinder-auto.pages.dev/` als eigene Werbewebsite hinterlegt ist. Die frühere Direktupload-Adresse `https://alltagsfinder-shop.pages.dev/` ist eine andere Site und ersetzt die neue Adresse nicht.
- [ ] **Impressum:** Die eingetragene aktuelle ladungsfähige Geschäftanschrift im Impressum bestätigen. Zusätzlich zur erreichbaren E-Mail einen rechtlich geeigneten, schnellen und unmittelbaren Kontaktweg bereitstellen (z. B. eine tatsächlich erreichbare Telefonnummer oder ein funktionsfähiges Kontaktformular); nötige Unternehmens-/Steuernummern nur soweit vorgeschrieben angeben. **Keine privaten Steuer-ID-Daten veröffentlichen.**
- [ ] **Datenschutzrechtlicher Betriebscheck:** Cloudflare Pages-Vertrag, Datenverarbeitung, Drittlandtransfers, Logaufbewahrung und gegebenenfalls zusätzliche Dienste prüfen; Erklärung an tatsächliche Einstellungen anpassen.
- [ ] **Live-Test in Chrome und auf iPhone:** `https://alltagsfinder-auto.pages.dev/` und `angebote.html` laden. Kopfhörerbild, Ratgeber, Katalogfilter, Menü, Merkliste und Kontaktdaten testen.
- [ ] **Händlerlink-Test:** Vom Partnerangebot aus den Amazon-Link öffnen und das exakte DOQAUS-Produkt sowie Partnerverfolgung kontrollieren. Ein Kurzlink lässt sich hier nicht unabhängig bis zum Ziel auflösen.
- [ ] **Suchmaschinenfreigabe:** Aktuell setzt `_headers` noch `X-Robots-Tag: noindex, nofollow, noarchive`. Diese Sperre erst nach den Prüfungen bewusst entfernen; danach Sitemap in der Google Search Console einreichen.

## Laufender Amazon-Betrieb

- PartnerNet-Bewerbung ist noch nicht endgültig genehmigt; mindestens drei qualifizierte Verkäufe in den ersten 180 Tagen lösen die Bewerbungskontrolle aus. Eigene Bestellungen zählen nicht.
- Die Creators API ist daher noch gesperrt. Weitere Produktdaten/Bilder dürfen nicht als offizielle API-Daten ausgegeben werden.
- Neue Affiliate-Angebote nur aus echten, überprüften Partnerlinks hinzufügen. Im CSV müssen `geprueft` und `freigeben` auf `JA` gesetzt sein; GitHub Actions erzeugt die Angebotsdaten und Cloudflare veröffentlicht Änderungen.
- Werbe- und Empfehlungsaktionen erst nach Impressum-/Datenschutzcheck. Keine erfundenen Tests, keine selbstgekauften Bestellungen zum Erreichen der Mindestverkäufe.

## Fachquellen

- § 5 DDG: https://www.gesetze-im-internet.de/ddg/__5.html
- Amazon Bewerbung: https://partnernet.amazon.de/help/node/topic/G8TW5AE9XL2VX9VM
- Amazon Creators API: https://partnernet.amazon.de/creatorsapi/docs/en-us/onboarding/register-for-creators-api
