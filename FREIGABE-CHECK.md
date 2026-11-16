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

## Letzter technischer Audit (16.11.2026)
- [x] **Amazon-Link-Herkunft:** Partnerlink-Attribute im Katalog, Produktdialog, Angebotsseite und DJ-Setup auf `rel="sponsored nofollow noopener"` angepasst. Die `Referrer-Policy: strict-origin-when-cross-origin` sendet bei HTTPS-Weiterleitungen die Ursprungsdomain, nicht den vollständigen Pfad. Dies vermeidet eine absichtliche Verschleierung der Werbewebsite.
- [x] **Aktualität der Texte:** Startseiten-Teaser und hervorgehobenes Angebot sprechen nicht mehr von einem einzigen Partnerangebot.
- [x] **Interne Linkprüfung:** GitHub QA kontrolliert für alle 20 Sitemap-Seiten die statischen internen Verknüpfungen auf existierende Ziele. Letzter abgeschlossener Lauf für `076deca` erfolgreich.
- [ ] **Unabhängiger Live-Test:** Öffentliche Cloudflare-HTTP-Antwort einschließlich `X-Robots-Tag`, Analytics-Beacon und die Weiterleitungsdetails der Amazon-Kurzlinks konnten hier nicht unabhängig abgerufen werden. Der Betreiber bestätigt, dass alle sechs Amazon-Links funktionieren; die Tracking-IDs und die externe technische Prüfung bleiben offen.

## Unverzichtbare externe Schritte vor uneingeschränkter Bewerbung und SEO-Freigabe

- [x] **PartnerNet-Website-Liste:** Der Betreiber hat am 16.11.2026 nach Einsicht in die PartnerNet-Kontoeinstellungen bestätigt, dass `https://alltagsfinder-auto.pages.dev/` bereits als Werbewebsite hinterlegt ist. Dies ist eine Nutzerbestätigung, keine unabhängige technische Kontoprüfung. Die frühere Adresse `https://alltagsfinder-shop.pages.dev/` ist eine andere Site.
- [x] **Kontaktseite eingerichtet:** `kontakt.html` mit responsivem Formular für Name, E-Mail, Anliegen und Nachricht; jetzt echter HTML-POST an Form.taxi; keine eigene Erfolgsmeldung ohne Anbieterbestätigung. Die Seite ist von Hauptseiten und Impressum erreichbar und in der Sitemap.
- [x] **Direkter Formularversand technisch integriert:** Nutzer hat den Endpunkt `https://form.taxi/s/qc25mby6` zur Verfügung gestellt; `kontakt.html` sendet mit nativem HTML-POST an Form.taxi. Standard-Bestätigungsseite (laut Nutzerkonfiguration), Spamfilter aktiviert und Domainfreigabe `alltagsfinder-auto.pages.dev` laut Screenshot vorhanden.
- [x] **Formular-Versand und E-Mail-Empfang nachgewiesen:** Nutzer-Screenshot „Formular wurde übermittelt!“ und passende Nachricht „Sendung von Alltagsfinder Kontaktformular“ im verbundenen Gmail-Postfach am 16.11.2026 um 10:55 Uhr (Deutschland).
- [x] **Form.taxi-AV-Vertrag generiert:** Screenshot vom 16.11.2026 zeigt „Vertrag wurde erstellt!“ im Form.taxi-Dashboard.
- [x] **Form.taxi-AV-Vertrag heruntergeladen und gespeichert:** Betreiber hat den Download ausdrücklich bestätigt. Die PDF selbst wurde hier nicht eingesehen.
- [x] **Form.taxi-AV-Vertragsfassung geprüft:** Betreiber hat die 12-seitige PDF vom 16.11.2026 übermittelt. Auftraggeber/Anschrift und Form.taxi als Auftragsverarbeiter stimmen; die PDF enthält eine ausdrückliche Klausel zur Wirksamkeit ohne Unterschriften, vertragliche Verarbeitungspflichten, Sicherheits-/Löschregeln und Unterauftragnehmer-Anhang. Keine abschließende anwaltliche Freigabe. Die private PDF wurde **nicht** ins öffentliche GitHub gestellt.
- [ ] **Form.taxi-Betrieb weiter prüfen:** Tatsächliche Lösch-/Speicherfristen, Spam-/CAPTCHA-Einstellungen sowie eventuelle Vertragsänderungen fortlaufend abgleichen.
- [x] **Impressum – Anschrift:** Betreiber hat am 16.11.2026 ausdrücklich bestätigt, dass die eingetragene Geschäftsanschrift Hamelnerstraße 20, 06126 Halle (Saale) aktuell ist. Form.taxi-Kontaktformular wurde unabhängig von E-Mail-Apps getestet; Benachrichtigung erreichte Gmail.
- [ ] **Impressum – Restpflichten:** Erforderliche Unternehmens-, Register- bzw. Identifikationsangaben je nach tatsächlicher Situation prüfen. **Keine private Steuer-ID veröffentlichen.** Rechtliche Vollständigkeit und schnelle Erreichbarkeit abschließend prüfen.
- [ ] **Datenschutzrechtlicher Betriebscheck:** Cloudflare Pages-Vertrag, Datenverarbeitung, Drittlandtransfers, Logaufbewahrung und gegebenenfalls zusätzliche Dienste prüfen; Erklärung an tatsächliche Einstellungen anpassen.
- [x] **Cloudflare-Produktionsstand:** Screenshot des Betreibers vom 16.11.2026 zeigt unter `alltagsfinder-auto` den Produktionszweig `main` mit Commit `ba8835b`, identisch mit dem GitHub-HEAD. Die Startseite war auf dem iPhone erreichbar. Dies bestätigt den veröffentlichten Git-Stand, nicht die Prüfung aller Funktionen.
- [ ] **Weitere Live-Tests:** `angebote.html`, Kopfhörerbild, Ratgeber, Katalogfilter, Menü, Merkliste und Kontaktdaten auf iPhone prüfen.
- [x] **Cloudflare Web Analytics im Projekt aktiviert:** Screenshot des Betreibers vom 16.11.2026 zeigt „Web Analytics wurde jetzt aktiviert. Änderungen werden bei der nächsten Bereitstellung angewendet“ und „Web Analytics ist aktiviert“. Datenschutzhinweise an diese Konfiguration angepasst. Cloudflare fügt den Beacon nach eigener Dokumentation ab der nächsten Bereitstellung ein.
- [ ] **Live-Analytics-Einbindung und Datenschutz verifizieren:** Nach der folgenden Produktionsbereitstellung prüfen, ob `static.cloudflareinsights.com/beacon.min.js` eingefügt wurde. Rechtsgrundlage, Hosting-Vertrag/DPA, etwaige Drittlandverarbeitung und Speicherfristen abschließend überprüfen. Die Kennzahlen „0 Anfragen“ im Cloudflare-Pages-Bereich sind kein verlässlicher Beleg dafür, dass die Website keine Besucher hat.
- [x] **Amazon-Link-Aufruf:** Betreiber hat am 16.11.2026 bestätigt, dass alle sechs hinterlegten Amazon-Links funktionieren. Dies bestätigt aus Nutzersicht ihre Erreichbarkeit, nicht unabhängig die exakte Zielvariante oder die Tracking-ID.
- [x] **Tracking-ID im Amazon-Konto nachgewiesen:** Screenshot des Betreibers vom 16.11.2026 aus „Tracking-IDs verwalten“ zeigt die ausgewählte ID `alltagsfin03b-21` und dieselbe ID in der Auswahlliste. Keine neue ID anlegen.
- [ ] **Amazon-Link-Zuordnung:** Exakte Zielprodukte/Varianten und die Einbettung des Tags `alltagsfin03b-21` in alle sechs vorhandenen Kurzlink-Weiterleitungen prüfen. Die Kurzlinks selbst lassen sich in dieser Umgebung nicht bis zur Ziel-URL auflösen. Eine aktive PartnerNet-ID allein bestätigt deren Verwendung in den sechs bestehenden Links nicht.
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
