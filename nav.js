// Navigation & Footer partagés – Portfolio BTS SIO Yann BEN FERHAT
(function () {
  // ── NAV ──────────────────────────────────────────────────────
  const pages = [
    { label: 'Accueil',        href: 'index.html' },
    { label: 'Profil',         href: 'profil.html' },
    { label: 'Mission E5',     href: 'mission-e5.html' },
    { label: 'Mission E6',     href: 'mission-e6.html' },
    { label: 'Veille',         href: 'veille.html' },
    { label: 'Certifications', href: 'certifications.html' },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  pages.forEach(({ label, href }) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    if (href === current) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = '';
    header.appendChild(nav);
  }

  // ── FOOTER ───────────────────────────────────────────────────
  const year = new Date().getFullYear();

  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = `<p>© ${year} – Portfolio IT · BTS SIO SISR</p>`;
  }
})();
