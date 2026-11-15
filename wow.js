/* Alltagsfinder: deliberate discovery interaction, no tracking, no external requests. */
(() => {
  const surprise = document.getElementById('hero-surprise');
  const next = document.getElementById('spotlight-next');
  const stage = document.getElementById('spotlight-stage');
  const spotlight = document.getElementById('spotlight-title');
  if (!surprise || !next || !stage || !spotlight) return;
  surprise.addEventListener('click', () => {
    next.click();
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    spotlight.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    stage.classList.remove('fresh-fund');
    void stage.offsetWidth;
    stage.classList.add('fresh-fund');
  });
  stage.addEventListener('animationend', () => stage.classList.remove('fresh-fund'));
})();