# Alltagsfinder: 668 Produktideen gesammelt mit echten Angeboten verknüpfen

## Stand am 15.11.2026
- 668 eindeutige IDs für alle Produktideen in 27 Kategorien.
- Datenquelle: \`data/affiliate-offers.csv\` (668 Zeilen, übersichtlich pro Produktidee).
- Freigabedatei: \`partner-offers.js\`; wird automatisch aus der CSV erzeugt.
- Automatik: \`.github/workflows/affiliate-offers.yml\` startet bei Änderungen der CSV.
- Prüfung: \`tools/build-offers.mjs\` akzeptiert nur exakte vorhandene IDs, HTTPS-Links und ausdrücklich geprüfte + freigegebene Zeilen.
- \`index.html\` lädt \`partner-offers.js\` und markiert aktive Angebote als Werbung/Partnerangebot.
- **0 aktive Angebote.** Es wurden keine Affiliate-IDs oder Links erfunden. Die Demo-Produkte sind weiterhin als Demo gekennzeichnet.

## Was ich selbst übernehmen kann
- Gültige Partnerlinklisten gesammelt den 668 bestehenden IDs zuordnen.
- CSV vollständig aktualisieren, Dubletten vermeiden und Veröffentlichungsstatus prüfen.
- Änderungen direkt über GitHub einspielen. GitHub Actions erzeugt die öffentliche Linkdatei; Cloudflare Pages soll daraus automatisch veröffentlichen.
- Produkttexte auf eine tatsächliche Händlerseite abstimmen, sobald die genauen Produktdaten autorisiert vorliegen.

## Was der Kontoinhaber einmal selbst tun muss
1. Mit dem eigenen Amazon-Konto bei **https://partnernet.amazon.de/** für das Amazon-Partnerprogramm anmelden.
2. Die eigene Webseite und alle verlangten Angaben wahrheitsgemäß hinterlegen. Die Website muss vor einer Bewerbung ausreichende Originalinhalte und korrekte Rechtstexte enthalten.
3. Den persönlichen **Partner-Tag** erhalten. Der Partner-Tag ist kein Passwort.
4. Nach Freigabe echte Partnerlinks über zulässige Amazon-Tools erzeugen. Die Amazon-Shopping-App Mobile GetLink ist für einzelne Links geeignet.
5. Für echten API-Massenabruf braucht es zusätzlich die nötigen Berechtigungen zur Amazon **Creators API**. Amazon nennt Voraussetzungen, darunter vollständige Zulassung und ausreichend qualifizierte Verkäufe. Dieser Zugang ist nicht automatisch nach der normalen Amazon-Kontoanmeldung verfügbar.

**Keine Geheimschlüssel / Token / Passwörter in die öffentliche GitHub-CSV, in Chatnachrichten oder in den Browser-Quellcode schreiben.** Spätere API-Zugangsdaten ausschließlich in dafür vorgesehenen Secret-Speichern verwalten.

## CSV-Format
\`id,produktidee,kategorie,haendler,partnerlink,geprueft,freigeben\`

- \`id\`, \`produktidee\`, \`kategorie\`: vom vorhandenen Katalog vorgegeben; dürfen nicht umbenannt werden.
- \`haendler\`: z. B. Amazon, nachdem ein echtes Angebot identifiziert ist.
- \`partnerlink\`: der tatsächlich gültige Affiliate-Link; HTTPS.
- \`geprueft\`: \`JA\` erst nach tatsächlichem Link-/Produktabgleich.
- \`freigeben\`: \`JA\` erst nach Prüfung; sonst \`NEIN\`.
- Sind beide JA und Händler/Link vorhanden, wird das Angebot eingebunden. Jede andere Zeile bleibt Demo.
- Keine Händlerpreise, Bewertungen, Versandversprechen, Bilder oder Produkt-Claims ohne lizenzierte, überprüfte Daten übernehmen.

## Import-Ablauf
1. Prüfte Partnerangebote in einer Tabelle gesammelt bereitstellen oder nach API-Freigabe über eine rechtlich zulässige Schnittstelle abrufen.
2. Überprüfte IDs und Links gebündelt in \`data/affiliate-offers.csv\` eintragen.
3. Änderung in GitHub speichern.
4. GitHub Actions prüft sämtliche 668 Zeilen, generiert \`partner-offers.js\` und committed die Datei, wenn sich veröffentlichte Angebote geändert haben.
5. Die bereits eingerichtete GitHub-Verbindung von Cloudflare Pages soll die aktualisierte Webseite veröffentlichen.
6. Öffentliche Seite und echte Linkziele auf Handy und Desktop kontrollieren.

## Wichtige Grenzen
- Der Artikelkatalog enthält 668 **generische Ideen**, nicht 668 bereits eindeutig verifizierte Amazon-ASINs. Eine 1:1-Zuordnung erfordert korrekte Produktidentitäten und eine manuelle oder programmgesteuerte Prüfung.
- Es gibt derzeit weder PartnerNet-Zugang noch Creators-API-Schlüssel in unserem Shop. Keine automatisierte Amazon-Datenbeschaffung läuft.
- Amazon überprüft PartnerNet-Webseiten unter anderem hinsichtlich Originalinhalten. Die Bewerbung sollte mit überprüften Rechtstexten und brauchbaren redaktionellen Inhalten erfolgen.
- Der Shop bleibt bis zur Freigabe eine Testversion. Suchmaschinenindexierung ist durch die vorhandenen Projektdateien vorerst ausgeschaltet.
