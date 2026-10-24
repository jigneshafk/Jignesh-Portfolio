/* Theme (light / dark) */
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const icon = btn.querySelector('i');
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  apply(saved || (prefersLight ? 'light' : 'dark'));

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    icon.className = theme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
  }
  btn.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

/* Typing effect */
(function () {
  const words = ['AR safety experiences', 'responsive web apps', 'React interfaces', 'ideas into products'];
  const el = document.getElementById('typed');
  let w = 0, c = 0, del = false;
  function tick() {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!del && c < word.length) { c++; setTimeout(tick, 80); }
    else if (!del) { del = true; setTimeout(tick, 1400); }
    else if (c > 0) { c--; setTimeout(tick, 40); }
    else { del = false; w = (w + 1) % words.length; setTimeout(tick, 300); }
  }
  tick();
})();

/* Navbar scroll state, scroll spy, back-to-top, close mobile menu */
(function () {
  const nav = document.getElementById('nav');
  const toTop = document.getElementById('toTop');
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links].map(function (l) { return document.querySelector(l.getAttribute('href')); });

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    toTop.classList.toggle('show', window.scrollY > 500);
    const pos = window.scrollY + 140;
    sections.forEach(function (s, i) {
      if (s && s.offsetTop <= pos && s.offsetTop + s.offsetHeight > pos) {
        links.forEach(function (l) { l.classList.remove('active'); });
        links[i].classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  const menu = document.getElementById('menu');
  links.forEach(function (l) {
    l.addEventListener('click', function () {
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });
})();

/* Reveal on scroll, skill bars, counters */
(function () {
  function count(el) {
    const target = +el.dataset.count, suffix = el.dataset.suffix || '';
    let n = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const t = setInterval(function () {
      n = Math.min(target, n + step);
      el.textContent = n + suffix;
      if (n >= target) clearInterval(t);
    }, 35);
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('.bar i').forEach(function (b) { b.style.width = b.dataset.w + '%'; });
      e.target.querySelectorAll('[data-count]').forEach(count);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();

/* Contact form validation */
(function () {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = form.querySelector('#email');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    email.setCustomValidity(emailOk ? '' : 'invalid');
    form.classList.add('was-validated');
    if (!form.checkValidity()) { alertBox.classList.add('d-none'); return; }
    alertBox.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
    setTimeout(function () { alertBox.classList.add('d-none'); }, 5000);
  });
})();

document.getElementById('year').textContent = new Date().getFullYear();
