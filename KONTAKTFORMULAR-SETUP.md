# Alltagsfinder Kontaktformular: direkten Versand aktivieren

## Aktueller Stand
Die neue Seite `kontakt.html` ist eingebaut und im Impressum sowie Footer verlinkt. Das sichtbare Formular erstellt aktuell **einen E-Mail-Entwurf im Besuchergerät**; es versendet selbst keine Nachricht. Damit wird niemand durch eine falsche „Erfolgreich gesendet“-Meldung getäuscht.

## Empfohlener EU-Formularanbieter: Form.taxi
Form.taxi verarbeitet Formularsendungen nach eigenen Angaben innerhalb der EU und bietet einen Auftragsverarbeitungsvertrag an; die dauerhafte Funktion braucht ein Betreiberkonto und einen individuellen Formular-Endpunkt. Quelle: https://docs.form.taxi/de/privacy

1. Betreiber bei https://form.taxi/de/ registrieren (je nach Plan kostenfrei möglich).
2. Neue Formularkonfiguration für **Alltagsfinder** einrichten, Empfängeradresse `djalpha2000.music@gmail.com` wählen und E-Mail-Benachrichtigungen aktivieren.
3. Individuelle **Sendeadresse** des Formulars aus dem Dashboard kopieren (Schema `https://form.taxi/s/FORM_CODE`, **kein** ausgedachter Test-Code). Dokumentation: https://www.docs.form.taxi/de/html-form-snippets
4. Im Form.taxi-Dashboard nach Möglichkeit Spam-Schutz und Versandbeschränkung auf `alltagsfinder-auto.pages.dev` konfigurieren. Formular-Felder Name, E-Mail, Thema, Nachricht, Honeypot einrichten.
5. **AV-Vertrag** nach Art. 28 DSGVO im Form.taxi-Dashboard erstellen/abschließen und die Datenschutz-Informationen an die tatsächlichen Verarbeitungseinstellungen anpassen.
6. Die echte Sendeadresse an ChatGPT weitergeben, damit `kontakt.html` auf einen **POST an Form.taxi** umgestellt wird. Die bisherige `mailto:`-Funktion als Fallback kennzeichnen.
7. Mit einer echten Testanfrage über die öffentliche Website prüfen, ob die Nachricht tatsächlich im Empfängerpostfach ankommt; gegebenenfalls Spamordner prüfen.
8. Erst danach öffentlich als direkt sendbares Kontaktformular bezeichnen. Die `noindex`-Sperre bleibt bis zum Abschluss *aller* Rechts- und Amazon-Checks erhalten.

Wichtig: **Nicht** einfach einen Form.taxi-Endpunkt raten oder ohne Vertrag personenbezogene Kontaktdaten an einen fremden Formularservice übertragen.
