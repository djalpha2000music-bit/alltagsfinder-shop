# Alltagsfinder: fünf ausgewählte Partnerprodukte (ein weiteres Angebot freigegeben)

Stand: 16.11.2026. Ziel: fünf zusätzliche klar beschriebene Produkte in der Kategorie Musik/DJ statt unübersichtlicher Demo-Masse. Der DJ-Controller ist jetzt ein freigeschaltetes Partnerangebot; die anderen vier sind **Redaktionskandidaten, noch keine freigeschalteten Partnerangebote**. Keine Links, Preise oder Amazon-Produktbilder wurden erfunden.

| Priorität | Katalog-ID (bereits vorhanden) | Konkreter Kandidat | Kaufhilfe-Ansatz | Status |
|---|---|---|---|---|
| 1 | dj-controller | AlphaTheta Pioneer DJ DDJ-FLX2 – 2-Kanal DJ-Controller | Software, Anschlüsse und Laptop-Bedarf | Produkt durch Amazon-Screenshot des Betreibers abgeglichen, Link `https://link.amazon/B099Pt8mG` mit `geprueft=JA`, `freigeben=JA` im Shop aktiviert; Tracking-Tag und Kurzlink-Ziel extern noch kontrollieren |
| 2 | audiointerface | Behringer U-Phoria UMC22 | Mikrofonanschluss, USB, Monitoring | Partnerlink und Händlerdetails prüfen |
| 3 | dynamisches-mikrofon | FIFINE AM8 USB/XLR (nur geplanter Kandidat, kein Modellnachweis) | XLR vs. USB, Zubehör, Verwendung | Neuer Kurzlink `https://link.amazon/B0fHdmstM` erhalten, Produkt noch nicht identifiziert. Erst nach Screenshot konkret zuordnen, dann gegebenenfalls im CSV aktivieren |
| 4 | led-par | EUROLITE LED PARty TCL Spot | Einsatzbereich, Stromversorgung und Steuerung | Partnerlink und Eigenschaften prüfen |
| 5 | studio-monitore | PreSonus Eris 3.5 (Modellgeneration ausdrücklich angeben) | Paar/Lieferumfang, Eingänge, Tischaufstellung | Partnerlink und Modellgeneration prüfen |

## Vorgehen

1. Im Amazon PartnerNet oder per Mobile GetLink für **das exakte Modell** einen individuellen, freigegebenen Partnerlink erzeugen; nicht einfach normale Amazon-Suchlinks als Partnerlinks markieren.
2. Linkziel, Modellvariante und Zuordnung zur Katalog-ID kontrollieren. Ein Amazon-Kurzlink allein ist kein unabhängiger Beleg für Tracking oder Produktdetails.
3. Erst danach die passende Zeile in `data/affiliate-offers.csv` mit `haendler=Amazon`, `partnerlink`, `geprueft=JA`, `freigeben=JA` füllen. Die bestehende GitHub-Action aktualisiert `partner-offers.js`.
4. Keine Preise, Rezensionen oder offiziellen Produktbilder ohne erforderliche Nutzungsrechte/API veröffentlichen. Referenzillustrationen immer als solche kennzeichnen; bei fehlendem Bild ein neutrales Symbol verwenden.
5. Für Kunden sichtbar bleiben: Werbung/Partnerlink und Amazon-Partnerhinweis. Kein eigener Warenkorb, keine Kaufabwicklung durch Alltagsfinder.

**Wichtig:** Derzeit sind zwei Partnerangebote im Katalog aktiv. Die weiteren 666 Katalogeinträge sind unverbindliche Produktideen. Kein offizielles Amazon-Produktbild auf unserer Webseite verwenden.
