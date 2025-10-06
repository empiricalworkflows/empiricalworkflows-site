(function () {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const yearEl = document.getElementById('year');
  const toggle = document.querySelector('.theme-toggle');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
  const onScroll = () => {
    const elevated = window.scrollY > 8;
    if (elevated) header && header.setAttribute('data-elevated', 'true');
    else header && header.removeAttribute('data-elevated');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
