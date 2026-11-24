/*! © 2026 Andrey (github.com/AndyBroken). All rights reserved. Concept / demo project, see LICENSE. */
// Shared header / footer so every page stays in sync
const LOGO = `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 26 12 11l5 8 3-5 9 12z" stroke-linejoin="round"/><circle cx="23" cy="7" r="2.5"/></svg>`;
const page = document.body.dataset.page;
const navItems = [['index.html', 'Home', 'home'], ['coffee.html', 'Our Coffee', 'coffee'], ['about.html', 'About', 'about'], ['journal.html', 'Journal', 'journal'], ['contact.html', 'Contact', 'contact']];

document.getElementById('header').outerHTML = `
<div class="announce">Free shipping on orders $40+ · Roasted to order in Portland, OR · <a href="contact.html#wholesale">Wholesale →</a></div>
<header class="site-header">
  <div class="container nav">
    <a href="index.html" class="logo">${LOGO}Northbound</a>
    <ul class="nav-links" id="navLinks">
      ${navItems.map(([h, t, k]) => `<li><a href="${h}" class="${k === page ? 'active' : ''}">${t}</a></li>`).join('')}
    </ul>
    <div class="nav-cta">
      <a href="contact.html#wholesale" class="btn btn-primary">Wholesale Inquiry</a>
      <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false">
        <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h20M3 13h20M3 19h20"/></svg>
      </button>
    </div>
  </div>
</header>`;

document.getElementById('footer').outerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="foot-grid">
      <div>
        <a href="index.html" class="logo">${LOGO}Northbound</a>
        <p style="max-width:300px;font-size:.94rem">Small-batch specialty coffee roasted in Portland, Oregon. Sourced with care, shared with friends.</p>
      </div>
      <div><h5>Explore</h5><ul><li><a href="coffee.html">Our Coffee</a></li><li><a href="about.html">Our Story</a></li><li><a href="journal.html">Brew Guides</a></li></ul></div>
      <div><h5>Business</h5><ul><li><a href="contact.html#wholesale">Wholesale</a></li><li><a href="contact.html">Office Coffee</a></li><li><a href="contact.html">Careers</a></li></ul></div>
      <div><h5>Visit</h5><ul><li>2210 SE Division St<br>Portland, OR 97202</li><li><a href="tel:+15035550199">(503) 555-0199</a></li><li><a href="mailto:hello@northbound.example">hello@northbound.example</a></li></ul></div>
    </div>
    <div class="foot-bottom"><span>© ${new Date().getFullYear()} Northbound Coffee Roasters</span><span>Concept website · Demo project · Design &amp; code © 2026 Andrey (AndyBroken)</span></div>
  </div>
</footer>
<div class="toast" id="toast"></div>`;

// mobile nav
const burger = document.getElementById('burger'), links = document.getElementById('navLinks');
burger.addEventListener('click', () => { const o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });

// helpers
function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 3000); }
function roastMeter(r) { const n = { Light: 1, Medium: 3, Dark: 5 }[r]; return `<span class="roast-meter" title="${r} roast">${[1,2,3,4,5].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</span>`; }
function coffeeCard(c) {
  return `<a class="card reveal" href="product.html?id=${c.id}">
    <div class="card-img">${c.badge ? `<span class="badge">${c.badge}</span>` : ''}${bagSVG(c)}</div>
    <div class="card-body">
      <div class="card-meta"><span>${c.origin}</span><span>${c.roast}</span></div>
      <h3>${c.name}</h3>
      <div class="notes">${c.notes.map(n => `<span>${n}</span>`).join('')}</div>
      <div class="card-foot"><span class="price">$${c.price} <small style="font-weight:400;color:var(--muted)">/ ${c.size}</small></span>${roastMeter(c.roast)}</div>
    </div></a>`;
}
function postCard(p) {
  return `<a class="post-card reveal" href="journal.html#${p.slug}">
    <div class="img"><img src="${IMG(p.img, 800)}" alt="" loading="lazy"></div>
    <div class="meta"><b>${p.cat}</b><span>${p.date}</span><span>${p.read} read</span></div>
    <h3>${p.title}</h3><p>${p.excerpt}</p></a>`;
}
function validate(form) {
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle('invalid', bad); if (bad) ok = false;
  });
  return ok;
}
document.querySelectorAll('form[data-newsletter]').forEach(f => f.addEventListener('submit', e => {
  e.preventDefault(); if (!validate(f)) return; f.reset(); toast('You’re in! Check your inbox for 10% off. ☕');
}));

// reveal on scroll (call again after rendering dynamic content)
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
function observeReveals() { document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el)); }
observeReveals();
