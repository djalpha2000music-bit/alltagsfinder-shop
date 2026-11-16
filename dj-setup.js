/* Alltagsfinder – data-free DJ setup chooser. Public reviewed partner offers only. */
(() => {
  "use strict";
  const root = document.getElementById("dj-setup-finder");
  if (!root) return;
  const buttons = Array.from(root.querySelectorAll("[data-setup]"));
  const list = document.getElementById("dj-setup-products");
  const message = document.getElementById("dj-setup-explainer");
  const count = document.getElementById("music-offer-status");
  const offers = window.ALLTAGSFINDER_PARTNER_OFFERS || {};
  const scenarios = {
    dj: {
      ids: ["dj-controller", "dj-kopfhoerer"],
      text: "Für den Einstieg ins Auflegen: Controller und Kopfhörer sind mögliche Bausteine. Vor dem Kauf Software, Anschlüsse und benötigte Kabel prüfen."
    },
    recording: {
      ids: ["dynamisches-mikrofon", "dj-kopfhoerer", "studio-monitore"],
      text: "Für erste Sprach- und Musikaufnahmen: Mikrofon und Kopfhörer sind mögliche Bausteine; Studiomonitore können fürs Abhören dazukommen. Anschlüsse, Aufnahmegerät und nötiges Zubehör vor dem Kauf prüfen."
    },
    speech: {
      ids: ["dynamisches-mikrofon"],
      text: "Für Moderation oder Streaming: Entscheidend sind Anschlussart, benötigte Halterung und Kompatibilität mit dem verwendeten Gerät."
    }
  };
  const hosts = new Set(["link.amazon", "amzn.to", "amazon.de", "www.amazon.de", "amazon.com", "www.amazon.com"]);
  function safeUrl(offer) {
    if (!offer || !offer.published || !offer.affiliateUrl || !offer.merchant) return null;
    try {
      const u = new URL(offer.affiliateUrl);
      if (u.protocol !== "https:" || u.username || u.password) return null;
      if (offer.merchant.toLowerCase() === "amazon" && !hosts.has(u.hostname.toLowerCase())) return null;
      return u.href;
    } catch (_) { return null; }
  }
  const active = Object.values(offers).filter(offer => safeUrl(offer)).length;
  if (count) count.textContent = "Testbetrieb · " + active + " gekennzeichnete Partnerangebote im Shop · Bilder sind Referenzillustrationen, Originale beim Händler";
  function card(id) {
    const offer = offers[id];
    const href = safeUrl(offer);
    if (!href) return null;
    const article = document.createElement("article");
    article.className = "dj-setup-card";
    const visual = document.createElement("div");
    visual.className = "dj-setup-card-image";
    const imgPath = typeof offer.image === "string" && /^assets\/[\w-]+\.(?:svg|webp|png|jpg|jpeg)$/.test(offer.image) ? offer.image : "";
    if (imgPath) {
      const img = document.createElement("img");
      img.src = imgPath;
      img.alt = offer.imageAlt || "Referenzillustration, Originalprodukt beim Händler prüfen";
      img.loading = "lazy";
      img.decoding = "async";
      visual.append(img);
    } else {
      const fallback = document.createElement("span");
      fallback.textContent = "♫";
      fallback.setAttribute("aria-label", "Symbolbild");
      visual.append(fallback);
    }
    const imageNote = document.createElement("small");
    imageNote.textContent = "REFERENZ-/SYMBOLBILD";
    visual.append(imageNote);
    const content = document.createElement("div");
    content.className = "dj-setup-card-content";
    const ad = document.createElement("span");
    ad.className = "dj-setup-ad";
    ad.textContent = "WERBUNG · PARTNERLINK";
    const heading = document.createElement("h3");
    heading.textContent = offer.title || "Partnerangebot";
    const details = document.createElement("p");
    details.textContent = offer.description || "Produktdaten, Zubehör und Verfügbarkeit bitte beim Händler prüfen.";
    const action = document.createElement("a");
    action.className = "dj-setup-buy";
    action.href = href;
    action.target = "_blank";
    action.rel = "sponsored nofollow noopener noreferrer";
    action.referrerPolicy = "strict-origin-when-cross-origin";
    action.textContent = "Beim Händler ansehen ↗";
    content.append(ad, heading, details, action);
    article.append(visual, content);
    return article;
  }
  function showScenario(key) {
    const scenario = scenarios[key] || scenarios.dj;
    for (const b of buttons) b.setAttribute("aria-pressed", String(b.dataset.setup === key));
    message.textContent = scenario.text;
    list.replaceChildren();
    let available = 0;
    for (const id of scenario.ids) {
      const element = card(id);
      if (element) { list.append(element); available++; }
    }
    if (!available) {
      const empty = document.createElement("p");
      empty.textContent = "Für diesen Bereich ist derzeit kein geprüftes Partnerangebot freigegeben. Alle Produktideen findest du im Katalog.";
      list.append(empty);
    }
  }
  for (const b of buttons) b.addEventListener("click", () => showScenario(b.dataset.setup));
  showScenario("dj");
})();
