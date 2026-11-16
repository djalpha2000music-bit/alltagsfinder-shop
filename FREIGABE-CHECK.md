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
- [x] GitHub Actions: Qualitätsprüfungen laufen bei Änderungen automatisch; aktuellen Status unter GitHub Actions kontrollieren
- [x] Cloudflare Pages über `main` Git-verbunden laut vorherigem Deployment, Sitemap vorbereitet

## Google-Vorbereitung (16. November 2026)
- [x] `robots.txt` erlaubt Crawling und nennt `https://alltagsfinder-auto.pages.dev/sitemap.xml`.
- [x] Sitemap mit 20 URLs und 11 eigenständigen Kaufhilfe-Seiten vorhanden.
- [x] `rel=canonical` für alle 20 HTML-Ziele ergänzt; generische Meta-Beschreibungen auf Informationsseiten differenziert.
- [x] Automatische Qualitätsprüfung für Sitemap-Ziele, Canonicals und Robots-Datei erweitert.
- [x] **Google Search Console:** URL-Präfix `https://alltagsfinder-auto.pages.dev/` eingerichtet. Zwei Google-HTML-Metatags in der Startseite eingebaut; Nutzer-Screenshot vom 16.11.2026 zeigt ausdrücklich „Inhaberschaft bestätigt“ (Bestätigungsmethode HTML-Tag). Tags für dauerhafte Bestätigung behalten.
- [ ] **Sitemap einreichen** nach rechtlichem Check und Aufhebung der Suchmaschinensperre.
- [ ] **Indexierung prüfen:** `X-Robots-Tag: noindex, nofollow, noarchive` erst nach Freigabe entfernen, öffentliche Cloudflare-Antwortheader kontrollieren, bei Google die URL-Prüfung verwenden.
- [ ] **Erwartung:** Google entscheidet selbst über Aufnahme und Ranking. Keine garantierten Aufrufe.

## Prüfstand am 16.11.2026 – was wir tatsächlich wissen
- Die Google Search Console zeigt laut vom Betreiber übermitteltem Screenshot „Inhaberschaft bestätigt“. Die Google-Tags bleiben dauerhaft in `index.html`.
- Sechs Amazon-Partnerangebote sind im GitHub-Produktbestand hinterlegt; der Betreiber hat mehrere Produktseiten per Screenshot abgeglichen. Die Amazon-Kurzlinks und Tracking-IDs lassen sich von hier **nicht unabhängig validieren**.
- Die aktuell im Impressum hinterlegte Anschrift und E-Mail sind vorhanden; die geschäftliche Anschrift, die Erreichbarkeit und ein weiterer effizienter Kontaktweg sind vom Betreiber noch zu bestätigen.
- Datenschutz: Der **GitHub-Quellcode** enthält keine eingebundene Analysebibliothek. Cloudflare Pages kann bei aktivierter Web Analytics ein Skript automatisch ergänzen; ob das live aktiviert ist, ist ohne Dashboard-Zugriff ungeprüft.
- Die öffentliche Cloudflare-Antwort inklusive tatsächlicher HTTP-Header ließ sich aus dieser Umgebung nicht unabhängig abrufen. `_headers` enthält weiterhin siteweites `noindex`.
- Grundlage und Nachweise: `GOOGLE-FREIGABE-NACHWEISE.md`.

## Unverzichtbare externe Schritte vor uneingeschränkter Bewerbung und SEO-Freigabe

- [x] **PartnerNet-Website-Liste:** Der Betreiber hat am 16.11.2026 nach Einsicht in die PartnerNet-Kontoeinstellungen bestätigt, dass `https://alltagsfinder-auto.pages.dev/` bereits als Werbewebsite hinterlegt ist. Dies ist eine Nutzerbestätigung, keine unabhängige technische Kontoprüfung. Die frühere Adresse `https://alltagsfinder-shop.pages.dev/` ist eine andere Site.
- [x] **Kontaktseite eingerichtet:** `kontakt.html` mit responsivem Formular für Name, E-Mail, Anliegen und Nachricht; jetzt echter HTML-POST an Form.taxi; keine eigene Erfolgsmeldung ohne Anbieterbestätigung. Die Seite ist von Hauptseiten und Impressum erreichbar und in der Sitemap.
- [x] **Direkter Formularversand technisch integriert:** Nutzer hat den Endpunkt `https://form.taxi/s/qc25mby6` zur Verfügung gestellt; `kontakt.html` sendet mit nativem HTML-POST an Form.taxi. Standard-Bestätigungsseite (laut Nutzerkonfiguration), Spamfilter aktiviert und Domainfreigabe `alltagsfinder-auto.pages.dev` laut Screenshot vorhanden.
- [x] **Formular-Versand und E-Mail-Empfang nachgewiesen:** Nutzer-Screenshot „Formular wurde übermittelt!“ und passende Nachricht „Sendung von Alltagsfinder Kontaktformular“ im verbundenen Gmail-Postfach am 16.11.2026 um 10:55 Uhr (Deutschland).
- [x] **Form.taxi-AV-Vertrag generiert:** Screenshot vom 16.11.2026 zeigt „Vertrag wurde erstellt!“ im Form.taxi-Dashboard.
- [ ] **AV-Vertrag herunterladen und abschließend prüfen:** PDF speichern, Angaben und tatsächlichen Vertragsabschluss bestätigen, Datenschutzkonfiguration und Speicherdauer kontrollieren.
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
