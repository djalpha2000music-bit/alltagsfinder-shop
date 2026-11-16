# Alltagsfinder – Freigabe-Stand (16. November 2026)

## Technisch umgesetzt
- 27 auffällige Kategorien, 668 eindeutige Produktideen, Suche, Filter, Merkliste, Vergleich und Produktdetaildialog.
- 1 freigeschaltetes und als Werbung gekennzeichnetes Amazon-Partnerangebot: DOQAUS DJ-Kopfhörer, über den vom Betreiber bereitgestellten Mobile-GetLink-Kurzlink.
- Generierte **Referenzabbildung** der schwarzen DJ-Kopfhörer tatsächlich im GitHub-Repository: `assets/doqaus-kopfhoerer-referenz.svg` (selbstenthaltene, komprimierte Bilddatei). In Karte und Detailansicht eingebunden. Das Bild ist **kein Originalfoto** des Händlerprodukts.
- Allgemeine Kennzeichnung auf Produktkarten: Referenz-/Symbolbilder; Originalprodukt und verbindliche Informationen nur beim Händler.
- `ratgeber.html`: vier bestehende Grundlagenartikel und 11 neue, separat verlinkte originale Ratgeberseiten.
- GitHub-Workflow für Sammelimport geprüfter Partnerlinks (keine erfundenen Produkte) sowie eigene technische Qualitätsprüfung.
- `sitemap.xml` vorbereitet; `robots.txt` gestattet Crawlerzugriff. Suchmaschinenindexierung bleibt über `_headers` vorerst ausgeschaltet.
- Datenschutztext hinsichtlich des tatsächlich eingerichteten statischen Cloudflare-Hostings und des ausgehenden Affiliate-Links aktualisiert.

## Drei noch zwingende externe Prüfungen
1. **Rechtliche Anbieterangaben:** Prüfen, ob die im Impressum angegebene ladungsfähige Geschäftanschrift derzeit korrekt ist und welche weitere schnelle, unmittelbare Kontaktmöglichkeit außer E-Mail angeboten werden kann. Prüfen, ob eine Umsatzsteuer-ID/Wirtschafts-ID/weitere Pflichtangaben vorhanden sind. Die konkrete Cloudflare-Vertrags- und Datenschutzkonfiguration ist ebenfalls zu bestätigen.
2. **Browser-Test:** `https://alltagsfinder-auto.pages.dev/` auf iPhone und Desktop öffnen und prüfen, ob Kopfhörerbild, alle 11 neuen Ratgeberseiten, Menüs, Suche und Amazon-Partnerlink funktionieren. Das kann im derzeit verbundenen Chat ohne Cloudflare-Zugriff nicht unabhängig bestätigt werden.
3. **Amazon-Freigabe:** Die API ist noch nicht verfügbar. Die endgültige Programmzulassung wird nach 3 qualifizierten Verkäufen geprüft. Für weitere echte Artikel sind gültige, zulässige Händler-/Partnerlinks erforderlich; aktuell bleibt es bei 1 Live-Angebot.

## Suchmaschinen-Start erst nach Freigabe
Die Datei `_headers` setzt derzeit `X-Robots-Tag: noindex, nofollow, noarchive`. Nach Prüfung der Pflichtangaben, Erreichbarkeit und Inhalte kann diese Sperre bewusst entfernt und eine erneute Cloudflare-Bereitstellung angestoßen werden. Keine versehentliche Freischaltung ohne Bestätigung.

## Originalquellen
- Amazon Bewerbungsprüfung: https://partnernet.amazon.de/help/node/topic/G8TW5AE9XL2VX9VM
- Amazon Kennzeichnungspflicht: https://partnernet.amazon.de/help/node/topic/GHQNZAU6669EZS98
- § 5 DDG: https://www.gesetze-im-internet.juris.de/ddg/__5.html
