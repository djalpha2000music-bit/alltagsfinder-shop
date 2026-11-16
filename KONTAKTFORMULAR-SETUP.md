# Alltagsfinder – Form.taxi angeschlossen
Stand: 16. November 2026.

## Technischer Anschluss
- [x] Benutzer hat im Form.taxi-Dashboard ein individuelles Formular eingerichtet.
- [x] Der vom Nutzer übermittelte Formular-Endpunkt lautet `https://form.taxi/s/qc25mby6`.
- [x] Formular `kontakt.html` sendet echte Nachrichten per `method="post"` an diese Sendeadresse.
- [x] Form.taxi-Standardseite für die Erfolgsmeldung ist laut Screenshot ausgewählt; wir imitieren keine erfolgreiche Zustellung auf unserer Website.
- [x] Ein Honeypot-Feld `_honeypot` wurde ergänzt.
- [x] Die manuelle E-Mail-Adresse bleibt als alternative Kontaktmöglichkeit.
- [x] Der Nutzer-Screenshot zeigt einen aktivierten Spamfilter sowie die eingeschränkte Domain `alltagsfinder-auto.pages.dev`.
- [x] Datenschutztext für Form.taxi angepasst, inklusive Hinweise auf Verarbeitung, E-Mail-Zustellung und Vertrag.

## Noch unbedingt erforderlich
- [ ] In Form.taxi bei den Zustellfunktionen bestätigen, dass die E-Mail-Benachrichtigungen tatsächlich an `djalpha2000.music@gmail.com` gehen. Evtl. neue E-Mail-Adresse per Link bestätigen.
- [ ] Im Form.taxi-Panel Bereich **Datenschutz** den AV-Vertrag gemäß Art. 28 DSGVO abschließen und Speicherdauer/Einstellungen kontrollieren. Nur das Formular anzulegen reicht dafür nicht. https://docs.form.taxi/de/privacy
- [ ] Nach einem abgeschlossenen AV-Vertrag von der öffentlichen Seite `https://alltagsfinder-auto.pages.dev/kontakt.html` eine echte Testnachricht schicken. Prüfen, ob Form.taxi die **Standard-Erfolgsseite** anzeigt und die Nachricht bei der genannten Empfängeradresse ankommt (ggf. Spam).
- [ ] Cloudflare-Deployment der neuesten GitHub-Version überprüfen.
- [ ] Impressum-Anschrift, Amazon PartnerNet und Cloudflare-Datenschutz getrennt prüfen, bevor `_headers` ohne `noindex` geschaltet wird.

## Technische Hinweise
Form.taxi unterstützt standardmäßigen HTML-POST, ohne besondere JavaScript-Bibliothek: https://docs.form.taxi/de/form-setup
HTML-Beispiele inkl. Honeypot: https://docs.form.taxi/de/html-form-snippets
Der gegebene Formular-Endpunkt ist kein Passwort, sollte aber nicht für Testspam missbraucht werden.
