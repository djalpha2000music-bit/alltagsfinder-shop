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
- [x] **AV-Vertrag heruntergeladen und gespeichert:** Der Betreiber hat ausdrücklich den PDF-Download aus Form.taxi bestätigt. Der PDF-Inhalt und der Ablageort wurden nicht eingesehen.
- [x] **12-seitige PDF inhaltlich eingesehen** (vom Betreiber am 16.11.2026 im Chat bereitgestellt, nicht öffentlich in GitHub hochgeladen). Sie nennt Form.taxi – Reinhard Söllradl als Auftragsverarbeiter, André Schmidt (Alltagsfinder) als Auftraggeber mit der vom Betreiber bestätigten Geschäftsanschrift und das Datum 16.11.2026. Seite 8 bestimmt ausdrücklich, dass der elektronische AV-Vertrag ohne Unterschriften wirksam ist. Gegenstand, Datenschutzpflichten, Sicherheitsmaßnahmen, Löschung und Unterauftragnehmer sind geregelt. Keine rechtsverbindliche Gesamtbegutachtung.
- [ ] Tatsächliche Form.taxi-Speicher-/Löschkonfiguration, aktualisierte Unterauftragsverarbeiter und dauerhafte private Sicherung der PDF regelmäßig kontrollieren. Laut Form.taxi-Info: Formulararchiv maximal ein Jahr; Spam maximal ein Monat. https://docs.form.taxi/de/privacy
- [ ] Besonderes Datenschutzrisiko: Der Vertrag schließt besondere Kategorien personenbezogener Daten nach Art. 9 DSGVO aus; Besucher im Kontaktformular ausdrücklich zur Nichtübermittlung solcher Daten anhalten.
- [x] Echte Testübermittlung von der öffentlichen Kontaktseite durchgeführt: Screenshot des Nutzers zeigt Form.taxi „Formular wurde übermittelt!“. Passende Benachrichtigung im verbundenen Gmail-Postfach nachgewiesen.
- [x] Das GitHub-verbundene Cloudflare-Pages-Projekt veröffentlichte am 16.11.2026 laut Betreiber-Screenshot den damals aktuellen Stand `fe0294a`. Spätere Änderungen werden über `main` automatisch bereitgestellt; die jeweils neueste Version lässt sich über die Projekt-Bereitstellungen überprüfen.
- [x] Geschäftsanschrift vom Betreiber als aktuell bestätigt; Alltagsfinder-Domain laut Betreiber bei Amazon PartnerNet bereits eingetragen; Cloudflare Web Analytics im Dashboard nachweislich aktiviert und Datenschutzhinweise entsprechend ergänzt.
- [ ] Offene Cloudflare-Vertrags-/Speicherfragen, finale Impressums- und Amazon-Tracking-Prüfungen sowie die Prüfung der tatsächlichen Hosting-/Verarbeitungseinstellungen bleiben vor einer Aufhebung von `noindex` bestehen. Die vorgelegte Form.taxi-Vertragsfassung ist gelesen und mit den Betreiberangaben abgeglichen.

## Technische Hinweise
Form.taxi unterstützt standardmäßigen HTML-POST, ohne besondere JavaScript-Bibliothek: https://docs.form.taxi/de/form-setup
HTML-Beispiele inkl. Honeypot: https://docs.form.taxi/de/html-form-snippets
Der gegebene Formular-Endpunkt ist kein Passwort, sollte aber nicht für Testspam missbraucht werden.
