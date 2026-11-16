# Alltagsfinder – Freigabe-Nachweise für Google und Affiliate-Betrieb
Stand: 16. November 2026. Dies ist ein Arbeitsprotokoll, **keine** juristische Freigabe.

## Sicher erledigt
- [x] Google Search Console: URL-Präfix `https://alltagsfinder-auto.pages.dev/` durch Betreiber am 16.11.2026 per HTML-Tag bestätigt.
- [x] Beide Google-Verifizierungstags in `index.html` eingebaut und beibehalten.
- [x] Sitemap enthält 20 Einträge einschließlich Kontaktseite; alle haben Canonical-URLs.
- [x] `robots.txt` verweist auf die Sitemap.
- [x] Sechs gekennzeichnete Amazon-Angebote im Produktregister; selbst erstellte Referenzbilder, keine behaupteten eigenen Gerätetests und keine statischen Amazon-Preise.
- [x] E-Mail aus dem bereits bestehenden Impressum als direkt anklickbare Kontaktaktion ergänzt.
- [x] Datenschutzhinweise klargestellt: Auch wenn der GitHub-Code keine Analyseskripte enthält, kann Cloudflare Web Analytics auf Serverebene eingebunden sein.

## 1. Amazon PartnerNet – ohne Kontozugriff nicht prüfbar
- [x] Betreiber war am 16.11.2026 in Amazon PartnerNet unter „Liste Deiner Webseiten & Apps“ und bestätigte ausdrücklich, dass `https://alltagsfinder-auto.pages.dev/` bereits eingetragen ist. Keine unabhängige Einsicht in die vollständige Kontoliste. https://partnernet.amazon.de/
- [ ] Die sechs bereits erstellten Partnerlinks in der Amazon-App aufrufen und prüfen, dass sie auf die beabsichtigten Produkte führen. Kontrollieren, ob bei Mobile GetLink die zutreffende Tracking-ID ausgewählt ist.
- [ ] Prüfen, dass der Shop alle Partnerprogrammregeln erfüllt und das Konto nicht abgelehnt wurde.
Offizielle Amazon-Hilfe: https://partnernet.amazon.de/help/node/topic/G9KDEPG2WF47VQY4

## 2. Impressum – muss an den realen Betrieb angepasst sein
- [ ] Die bestehende Geschäftsanschrift und die Erreichbarkeit von `djalpha2000.music@gmail.com` bestätigen.
- [ ] **Zusätzliche schnelle, unmittelbare Kommunikationsmöglichkeit** rechtskonform bereitstellen (erreichbare Telefonnummer **oder** tatsächlich funktionierende und schnell beantwortete Kontaktmöglichkeit). Keine Telefonnummer erfinden; keine fremden Kontaktdaten verwenden. Eine zweite Schaltfläche, die ebenfalls nur die E-Mail öffnet, ist **kein unabhängiger Kommunikationsweg**.
- [ ] Nach tatsächlicher Unternehmenssituation prüfen, ob Registerangaben, Umsatzsteuer-ID, Wirtschafts-ID oder andere Pflichtangaben anzugeben sind; persönliche Steuer-ID nicht veröffentlichen.
Amtliche Grundlage: https://www.gesetze-im-internet.de/ddg/__5.html
EuGH dazu: https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=ecli:ECLI:EU:C:2008:572

## 3. Cloudflare Pages / Datenschutz – Live-Konfiguration überprüfen
- [x] Cloudflare → Workers & Pages → **alltagsfinder-auto** → Kennzahlen: Screenshot vom 16.11.2026 bestätigt **Web Analytics aktiviert**. Cloudflare weist darauf hin, dass dies bei der nächsten Bereitstellung angewendet wird. Datenschutzerklärung wurde um den aktiven Dienst ergänzt.
- [ ] Nach der nächsten Bereitstellung die tatsächliche HTML-Auslieferung und Einbindung des Beacon-Skripts bestätigen.
- [ ] Beim Besuch der öffentlichen Seite mit Entwicklertools prüfen, ob externe Analyse-Beacons, Cookies oder andere Dienste geladen werden.
- [ ] Cloudflare-Vertrags-/DPA-Status, Log-Verarbeitung und Speicherfristen anhand der für das eigene Konto geltenden Dokumentation prüfen.
- [ ] Drittländer, Verarbeitung und ggf. Betroffenenrechte in der Datenschutzerklärung auf den tatsächlichen Stand bringen.
Cloudflare Analytics: https://developers.cloudflare.com/pages/how-to/web-analytics/
Cloudflare DPA: https://www.cloudflare.com/en-gb/cloudflare-customer-dpa/

## 4. Erst danach: Google-Indexierung öffnen
- [ ] Rechtliche und kontobezogene Punkte oben abgeschlossen und vom Betreiber geprüft.
- [ ] Das globale `X-Robots-Tag: noindex, nofollow, noarchive` in `_headers` entfernen, GitHub-Qualitätstest anpassen und auf Cloudflare deployen.
- [ ] Live HTTP-Header kontrollieren. Die Homepage und zwei Ratgeber müssen indexierbar sein; `robots.txt` darf das Crawling nicht blockieren.
- [ ] Google Search Console → Sitemaps → `sitemap.xml` einreichen.
- [ ] Über URL-Prüfung Homepage und wichtigste Ratgeber ansehen und eventuell Indexierung beantragen.
- [ ] In Search Console nach tatsächlichen Impressionen und Klicks schauen. Ranking und Indexierung sind nicht garantiert.
Offizielle Google-Anleitung: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## Sperrstatus
**Noch gesperrt**. Wir dürfen die `noindex`-Datei nicht als letzte Formalität behandeln, solange echte rechtliche oder Kontoprüfungen offen sind. Eine erfolgreiche Google-Verifizierung ist nur eine Bestätigung der Inhaberschaft, nicht die rechtliche Freigabe.

## Kontaktformular-Ausbau (16.11.2026)
- [x] Kontaktseite mit echtem Form.taxi-POST-Versand, passenden Datenschutzhinweisen, Navigation und Sitemap eingerichtet.
- [x] Benutzerdefinierte Form.taxi-Sendeverbindung aus Nutzerangabe `https://form.taxi/s/qc25mby6` mit POST integriert; Nutzer-Screenshot bestätigt Spamfilter und Domainfreigabe.
- [x] E-Mail-Empfänger und tatsächlichen Testeingang am 16.11.2026 um 10:55 Uhr bestätigt; Form.taxi zeigte „Formular wurde übermittelt“ und Gmail enthielt „Sendung von Alltagsfinder Kontaktformular“.
- [x] Form.taxi-AV-Vertrag nach Screenshot vom 16.11.2026 im Panel erstellt.
- [ ] AV-Vertrag herunterladen, Personendaten und formelle Vollständigkeit kontrollieren sowie ablegen.
- [x] Im Impressum als Formularlink bezeichnet; technisch unabhängig vom E-Mail-Client.
- [ ] Vor Google-Freigabe tatsächliche Zustellung und rechtliche Erreichbarkeit erneut prüfen.
