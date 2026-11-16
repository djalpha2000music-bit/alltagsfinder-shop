# Google Search Console für Alltagsfinder – letzte Schritte
Stand: 16. November 2026

**Status 16. November 2026: Google hat die Inhaberschaft per HTML-Tag bestätigt.** Die Verifizierung ist abgeschlossen; beide bestehenden Google-Metatags in `index.html` dauerhaft beibehalten. Die Site bleibt trotzdem vorläufig `noindex` bis zur Prüfung der rechtlichen Pflichtangaben, Datenschutzpraxis und Amazon-PartnerNet-Website-Zuordnung.

## Bereits fertig
- Sitemap: https://alltagsfinder-auto.pages.dev/sitemap.xml mit 20 URLs, darunter 11 Ratgeber und die neue Kontaktseite.
- Crawling-Hinweis: https://alltagsfinder-auto.pages.dev/robots.txt enthält den Link zur Sitemap.
- Die 20 Seiten haben passende kanonische URLs (rel="canonical").
- GitHub prüft den technischen Zustand automatisch.

## 1. Website-Eigentum bei Google bestätigen (auch während des Testbetriebs möglich)
1. Auf https://search.google.com/search-console/ mit dem gewünschten Google-Konto anmelden.
2. "Property hinzufügen" wählen, dann **URL-Präfix** (nicht die DNS-Option "Domain", da die aktuelle Adresse eine pages.dev-Unterdomain ist).
3. Exakt `https://alltagsfinder-auto.pages.dev/` einfügen.
4. Unter den Bestätigungsmethoden **HTML-Tag** auswählen.
5. Den vollständigen, von Google ausgestellten `<meta name="google-site-verification" content="...">`-Tag kopieren. Diesen Tag nicht raten oder selbst erzeugen.
6. Den tatsächlichen Tag in den `<head>`-Abschnitt der Startseite `index.html` setzen und über GitHub/Cloudflare veröffentlichen.
7. Erst nachdem das neue HTML öffentlich sichtbar ist, in der Search Console auf **Bestätigen** klicken. Den Tag danach im Quellcode belassen.

## 2. Externe Freigaben vor Google-Indexierung
- **Impressum:** aktuelle ladungsfähige Anschrift und rechtlich erforderliche Unternehmensangaben prüfen. Das unabhängige Kontaktformular wurde eingerichtet und durch tatsächliche Form.taxi-Zustellung sowie E-Mail-Eingang getestet; die Aktualität der Geschäftsanschrift und gegebenenfalls weitere Unternehmensangaben müssen noch bestätigt werden.
- **Datenschutz:** Form.taxi-AV-Vertrag wurde im Panel erstellt, muss als PDF gesichert und auf Richtigkeit geprüft werden. Echte Cloudflare-Hosting-Verträge, am 16.11.2026 nachgewiesene Aktivierung von Cloudflare Web Analytics: Auslieferung nach dem nächsten Deployment, Hosting-Verträge/DPA, Logdaten, Speicherdauer und ggf. Datenübermittlungen prüfen und Hinweise an den tatsächlichen Betrieb anpassen.
- **Amazon PartnerNet:** Betreiber hat am 16.11.2026 bestätigt, dass `https://alltagsfinder-auto.pages.dev/` bereits in der Werbewebsite-Liste eingetragen ist. Die sechs tatsächlichen Affiliate-Ziele, Tracking-IDs und der Kontostatus bleiben zu kontrollieren.
- Erst nach diesen Punkten die siteweite Anweisung `X-Robots-Tag: noindex, nofollow, noarchive` aus `_headers` entfernen. Sie ist derzeit bewusst aktiv.

## 3. Wenn die Website freigegeben ist
1. Cloudflare-Deployment und die tatsächlichen HTTP-Antwortheader auf Abwesenheit von `noindex` prüfen.
2. Search Console → **Sitemaps** öffnen; dort `sitemap.xml` eintragen und absenden.
3. Search Console → **URL-Prüfung**: die Startseite und wichtige Ratgeber prüfen, bei Bedarf "Indexierung beantragen" wählen.
4. In den folgenden Wochen auf Seitenindexierung, Suchanfragen und Klicks achten. Eine Sitemap garantiert keine Indexierung oder Rankings.

## Technischer Status
**Vorbereitet, noch nicht für Google indexierbar.** Die siteweite `noindex`-Anweisung bleibt aktiv bis zu den erforderlichen Prüfungen.

## Offizielle Quellen
- Verifizierung: https://support.google.com/webmasters/answer/9008080
- Google Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Canonical: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Cloudflare-Header: https://developers.cloudflare.com/pages/configuration/headers/
- § 5 DDG: https://www.gesetze-im-internet.de/ddg/__5.html
