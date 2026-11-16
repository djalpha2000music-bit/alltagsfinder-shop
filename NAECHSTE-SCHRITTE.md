# Alltagsfinder – Prioritäten bis zur ersten Amazon-Prüfung

**Stand:** 16.11.2026. Ein Amazon-Partnerangebot aus 668 Katalogeinträgen aktiv; 667 Produktideen sind vorbereitete Demos. Amazon Creators API ist wegen noch nicht endgültig genehmigtem Partnerkonto nicht verfügbar.

## Reihenfolge

1. **Technik & Wahrheit vor Werbung**
   - Im Shop kontrollieren, dass der DOQAUS-Link genau zum richtigen Modell führt.
   - Produktreferenzbild als echte Bilddatei ins GitHub-Repository bringen und in der Produktkarte sowie Detailansicht testen. (Prüfung ergab: aktuell fehlt die Bilddatei im Repository; frühere Aussage, sie sei eingebaut, war voreilig.)
   - Sichtbare Hinweise zu Werbung / Affiliate sowie Symbolbildern erhalten.
   - Impressum und Datenschutz vor Bewerbung prüfen und korrigieren; keine ungeprüften Identitäts- oder Kontaktangaben veröffentlichen.
2. **Originale Inhalte statt Demo-Masse**
   - 10 eigenständige, hilfreiche Artikel/Beiträge veröffentlichen. Bestehende Ratgeber sind ein guter Ausgangspunkt, zählen aber nicht automatisch als 10 separate Posts.
   - Kategorien mit wenigen konkreten, verifizierten Angeboten priorisieren: DJ/Musik, Technik, Haushalt.
   - Aussagen nicht als selbst getestet darstellen, wenn kein Test stattgefunden hat.
3. **Qualifizierte Verkäufe**
   - Amazon prüft die Bewerbung nach mindestens drei qualifizierten Verkäufen in den ersten 180 Tagen; eigene Bestellungen zählen nicht.
   - Für echte Besucher die Shop-Seite und hilfreiche Ratgeber in den eigenen sozialen Kanälen sachlich vorstellen; nicht gegen Amazon-Regeln zu bezahlter Direktwerbung oder Spam verstoßen.
   - Nur funktionierende, klar als Werbung gekennzeichnete Partnerlinks verwenden.
4. **Automatisieren**
   - Solange die Creators API gesperrt ist: echte, vom Betreiber erzeugte Partnerlinks gesammelt in `data/affiliate-offers.csv` übernehmen; GitHub Actions aktualisiert `partner-offers.js`.
   - Nach endgültiger Annahme API-Status prüfen. Für bestimmte API-Produktdaten nennt Amazon zusätzliche Berechtigungen und Verkaufsanforderungen.
   - API-Geheimnisse nur in einem Secret-Speicher aufbewahren; nicht im Browser, Repository oder Chat.
5. **Suchmaschinenstart**
   - Aktuell unterbinden `robots.txt` und `_headers` die Indexierung. Erst nach überprüften Rechtstexten und Originalinhalten SEO freigeben.

## Nächster Block

- [ ] Bilddatei für DOQAUS-Kopfhörer tatsächlich hochladen und auf der Live-Seite prüfen
- [ ] Ersten Partnerlink im Browser testen
- [ ] Pflichtseiten und Ratgeber prüfen
- [ ] Weitere 5–10 eindeutig passende Produkte mit echten Partnerlinks ergänzen
- [ ] Katalog/SEO erst bei überprüfter Qualität öffnen

**Quellen:** Amazon PartnerNet Bewerbungsprüfung: https://partnernet.amazon.de/help/node/topic/G8TW5AE9XL2VX9VM – Creators API Registrierung: https://partnernet.amazon.de/creatorsapi/docs/en-us/onboarding/register-for-creators-api
