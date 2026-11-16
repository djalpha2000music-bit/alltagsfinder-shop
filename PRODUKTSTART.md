# Alltagsfinder – echte Partnerprodukte aktivieren

## Aktueller Status
- 668 **Produktideen** aus 27 Kategorien; davon ist **1 geprüftes Partnerangebot** aktiv und 667 sind unverbindliche Ideen.
- Produktdaten stehen in `index.html` im Array `window.ALLTAGSFINDER_PRODUCTS`.
- Jedes Produkt hat die Felder `id`, `title`, `category`, `description`, `benefits`, `merchant`, `affiliateUrl`, `published`.
- Der Shop nimmt keine eigenen Zahlungen an; eine qualifizierte Partnervermittlung wird nach Händlerfreigabe vergütet.
- Demo-Produkte müssen weiterhin deutlich als Beispiele erkennbar bleiben.

## Ablauf pro echtem Angebot
1. **Händlerfreigabe:** Betreiber meldet die Live-Webseite beim Partnerprogramm an; Händler akzeptiert.
2. **Produktverifikation:** Exakte Händler-Produktseite, Eignung, Kategorie, Originaltext, belegbare Eigenschaften.
3. **Lizenz & Links:** Bildrechte, Preis-/Datenverwendungsbedingungen, erlaubte Affiliate-Linkformate prüfen.
4. **Daten aktivieren:** `merchant` und echten `affiliateUrl` eintragen; `published:true` **nur nach Prüfung**.
5. **Kennzeichnung:** Partnerhinweise klar sichtbar, ausgehende Links mit `rel="sponsored nofollow noopener noreferrer"` und `target="_blank"`.
6. **QA:** Link testen; auf iPhone und Desktop prüfen; keine erfundenen Rabattpreise, Rezensionen, Bestseller- oder Testsieger-Behauptungen.
7. **Pflege:** Mindestens regelmäßig auf kaputte Links, geänderte Partnerbedingungen, überholte Empfehlungen und Rechts-/Datenschutzhinweise prüfen.

## Empfehlenswerte Reihenfolge
- Phase A: 15–25 hochwertige, überprüfte echte Angebote in **Musik & DJ**, **Technik** und **Haushalt**.
- Phase B: 11 eigenständige Ratgeber-Seiten wurden im November 2026 veröffentlicht, zusätzlich zu vier Grundlagenartikeln.
- Phase C: Partnerprogrammmöglichkeiten vergleichen; keine Anbieterbedingungen verletzen.
- Phase D: Erst nach erfolgreichem Test den Katalog ausweiten und etwaige erlaubte Produktfeeds anbinden.

## Anbieter zum Prüfen
- Amazon PartnerNet: https://partnernet.amazon.de/
- Awin: https://www.awin.com/de
- Thomann Partnerprogramm: https://www.thomann.de/de/faq_question_wie_werde_ich_thomann_linkpartner.html (hat Mindestanforderungen an Reichweite)

**Wichtig:** Dies ist keine Zusage für Programmakzeptanz, automatische Produktversorgung oder Einnahmen. `robots.txt` erlaubt das Crawling, die `_headers`-Datei verhindert derzeit noch die Suchmaschinen-Indexierung für die Testphase. Die endgültigen Rechtstexte müssen vor einem regulären öffentlichen Vertriebsstart sachlich und rechtlich geprüft werden.
