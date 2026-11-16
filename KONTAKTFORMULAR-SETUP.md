# Alltagsfinder – Form.taxi angeschlossen
Stand: 16. November 2026.

## Technischer Anschluss
- [x] Benutzer hat im Form.taxi-Dashboard ein individuelles Formular eingerichtet.
- [x] Der vom Nutzer übermittelte Formular-Endpunkt lautet `https://form.taxi/s/qc25mby6`.
- [x] Formular `kontakt.html` sendet echte Nachrichten per `method="post"` an diese Sendeadresse.
- [x] Form.taxi-Standardseite für die Erfolgsmeldung ist laut Screenshot ausgewählt; wir imitieren keine erfolgreiche Zustellung auf unserer Website.
- [x] Das Formular nutzt ein verborgenes Honeypot-Feld `_gotcha` (Standardvorgabe der Form.taxi-Spamfilter-Dokumentation). Die E-Mail-Eingabe heißt `email`, damit eine künftig aktivierte E-Mail-Prüfung sie erkennt. Quelle: https://docs.form.taxi/de/spam-protection
- [x] Die manuelle E-Mail-Adresse bleibt als alternative Kontaktmöglichkeit.
- [x] Der Nutzer-Screenshot zeigt einen aktivierten Spamfilter sowie die eingeschränkte Domain `alltagsfinder-auto.pages.dev`.
- [x] Datenschutztext für Form.taxi angepasst, inklusive Hinweise auf Verarbeitung, E-Mail-Zustellung und Vertrag.

## Noch unbedingt erforderlich
- [x] Tatsächlicher E-Mail-Eingang am 16.11.2026 um 10:55 Uhr (Deutschland) im verbundenen Gmail-Postfach `djalpha2000.music@gmail.com` bestätigt. Betreff: „Sendung von Alltagsfinder Kontaktformular“. Gmail meldet Nachricht im Posteingang. Das beweist den End-to-End-Test. Konfiguration der Absender-/Empfängeradressen bei späteren Änderungen erneut kontrollieren.
- [x] AV-Vertrag im Form.taxi-Dashboard **erstellt**: Screenshot des Betreibers vom 16.11.2026 zeigt ausdrücklich „Vertrag wurde erstellt!“.
- [ ] AV-Vertrag als PDF herunterladen, Angaben prüfen, dauerhaft aufbewahren und sicherstellen, dass die Vereinbarung tatsächlich wirksam abgeschlossen ist. Speicherfristen/Einstellungen im Form.taxi-Konto kontrollieren. https://docs.form.taxi/de/privacy
- [x] Echte Testübermittlung von der öffentlichen Kontaktseite durchgeführt: Screenshot des Nutzers zeigt Form.taxi „Formular wurde übermittelt!“. Passende Benachrichtigung im verbundenen Gmail-Postfach nachgewiesen.
- [x] Das GitHub-verbundene Cloudflare-Pages-Projekt veröffentlichte am 16.11.2026 laut Betreiber-Screenshot den damals aktuellen Stand `fe0294a`. Spätere Änderungen werden über `main` automatisch bereitgestellt; die jeweils neueste Version lässt sich über die Projekt-Bereitstellungen überprüfen.
- [x] Geschäftsanschrift vom Betreiber als aktuell bestätigt; Alltagsfinder-Domain laut Betreiber bei Amazon PartnerNet bereits eingetragen; Cloudflare Web Analytics im Dashboard nachweislich aktiviert und Datenschutzhinweise entsprechend ergänzt.
- [ ] Offene Cloudflare-Vertrags-/Speicherfragen, finale Impressums- und Amazon-Link-Prüfungen sowie der PDF-Nachweis zum AV-Vertrag bleiben vor einer Aufhebung von `noindex` bestehen.

## Technische Hinweise
Form.taxi unterstützt standardmäßigen HTML-POST, ohne besondere JavaScript-Bibliothek: https://docs.form.taxi/de/form-setup
HTML-Beispiele inkl. Honeypot: https://docs.form.taxi/de/html-form-snippets
Der gegebene Formular-Endpunkt ist kein Passwort, sollte aber nicht für Testspam missbraucht werden.
