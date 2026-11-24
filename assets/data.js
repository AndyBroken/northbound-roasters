/*! © 2026 Andrey (github.com/AndyBroken). All rights reserved. Concept / demo project, see LICENSE. */
const IMG = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Branded bag illustration (own packaging, no third-party logos)
function bagSVG(c) {
  const lines = c.label, fs = Math.min(22, Math.floor(232 / Math.max(...lines.map(l => l.length))));
  const y0 = 248 + fs * 0.33 - (lines.length - 1) * fs * 0.55;
  return `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${c.name} bag" style="width:100%;height:100%;display:block">
  <defs><linearGradient id="k-${c.id}" x1="0" x2="1"><stop offset="0" stop-color="#c9a57a"/><stop offset=".45" stop-color="#dcbb92"/><stop offset="1" stop-color="#b99167"/></linearGradient></defs>
  <rect width="400" height="400" fill="${c.bg}"/>
  <circle cx="330" cy="80" r="120" fill="#fff" opacity=".18"/>
  <ellipse cx="200" cy="338" rx="110" ry="12" fill="#000" opacity=".14"/>
  <path d="M118 84h164l14 236q1 14-14 14H118q-15 0-14-14z" fill="url(#k-${c.id})"/>
  <path d="M118 84h164l2 26H116z" fill="#000" opacity=".12"/>
  <path d="M200 110v222" stroke="#000" opacity=".05" stroke-width="40"/>
  <circle cx="200" cy="132" r="7" fill="#8f6b45"/><circle cx="200" cy="132" r="3" fill="#6e5032"/>
  <rect x="136" y="150" width="128" height="162" rx="6" fill="${c.labelColor}"/>
  <path d="M186 184l8-13 5 7 3-4 8 10z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
  <text x="200" y="204" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="9" letter-spacing="2.5" fill="#fff" opacity=".85">NORTHBOUND</text>
  ${lines.map((l, i) => `<text x="200" y="${y0 + i * fs * 1.1}" text-anchor="middle" font-family="DM Serif Display,serif" font-size="${fs}" fill="#fff">${l}</text>`).join('')}
  <text x="200" y="298" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="9" letter-spacing="1.5" fill="#fff" opacity=".8">${c.roast.toUpperCase()} ROAST · 12 OZ</text>
</svg>`;
}

const COFFEES = [
  { id: 'summit', label:['Summit','Blend'], bg:'#e9dfcf', labelColor:'#23453a', name: 'Summit Blend', roast: 'Medium', origin: 'Colombia & Brazil', notes: ['Milk chocolate', 'Caramel', 'Toasted almond'],
    price: 17, size: '12 oz', img: '1605711599412-775918dbe770', process: 'Washed / Natural', altitude: '1,400–1,900 m',
    desc: 'Our everyday house blend. Balanced, sweet and forgiving — great as drip, espresso or cold brew.' , badge: 'Best seller' },
  { id: 'yirgacheffe', label:['Ethiopia','Yirgacheffe'], bg:'#f1dccd', labelColor:'#c26a47', name: 'Ethiopia Yirgacheffe', roast: 'Light', origin: 'Gedeo, Ethiopia', notes: ['Jasmine', 'Lemon zest', 'Peach'],
    price: 21, size: '12 oz', img: '1598198192305-46b0805890d3', process: 'Washed', altitude: '1,900–2,200 m',
    desc: 'Floral and tea-like with a bright citrus finish. A pour-over lover’s dream.', badge: 'Single origin' },
  { id: 'night-owl', label:['Night Owl','Espresso'], bg:'#d7d3cc', labelColor:'#1d2622', name: 'Night Owl Espresso', roast: 'Dark', origin: 'Sumatra & Guatemala', notes: ['Dark cocoa', 'Molasses', 'Cedar'],
    price: 18, size: '12 oz', img: '1695245503558-5cdb37f49092', process: 'Wet-hulled / Washed', altitude: '1,200–1,700 m',
    desc: 'Bold, syrupy and low in acidity. Cuts through milk beautifully for lattes and cappuccinos.' },
  { id: 'huehue', label:['Guatemala','Huehue-','tenango'], bg:'#e4e1c9', labelColor:'#7a6a2c', name: 'Guatemala Huehuetenango', roast: 'Medium', origin: 'Huehuetenango, Guatemala', notes: ['Brown sugar', 'Red apple', 'Pecan'],
    price: 19, size: '12 oz', img: '1642437271884-fe1d3393eef9', process: 'Washed', altitude: '1,600–1,900 m',
    desc: 'Crisp and juicy with a sweet, nutty body. Grown by the Ixchel cooperative.', badge: 'New' },
  { id: 'decaf', label:['Mountain','Water Decaf'], bg:'#d9e4dd', labelColor:'#4f7363', name: 'Mountain Water Decaf', roast: 'Medium', origin: 'Veracruz, Mexico', notes: ['Cocoa', 'Graham cracker', 'Orange'],
    price: 18, size: '12 oz', img: '1684420742076-a9641a1f2428', process: 'Mountain Water Process', altitude: '1,100–1,400 m',
    desc: 'Chemical-free decaf that still tastes like real coffee. Perfect for after-dinner cups.' },
  { id: 'kenya', label:['Kenya','Nyeri AA'], bg:'#ead3d6', labelColor:'#8a3446', name: 'Kenya Nyeri AA', roast: 'Light', origin: 'Nyeri, Kenya', notes: ['Blackcurrant', 'Grapefruit', 'Cane sugar'],
    price: 23, size: '12 oz', img: '1780660231448-7f0aa4d236e9', process: 'Washed', altitude: '1,700–1,900 m',
    desc: 'Big, juicy and complex — a limited lot we wait for all year.', badge: 'Limited' },
];

const POSTS = [
  { slug: 'pour-over', title: 'The 4-Minute Pour-Over: A No-Stress Guide', cat: 'Brew Guide', date: 'Oct 28, 2026', read: '6 min', img: '1442512595331-e89e73853f31',
    excerpt: 'All you need is a dripper, a kettle and a scale. Here’s our foolproof recipe for a sweet, clean cup.' },
  { slug: 'cold-brew', title: 'Big-Batch Cold Brew for the Whole Week', cat: 'Brew Guide', date: 'Oct 12, 2026', read: '4 min', img: '1522012188892-24beb302783d',
    excerpt: 'Make a concentrate on Sunday, enjoy smooth iced coffee every morning. Ratios, timing and storage tips.' },
  { slug: 'origin-trip', title: 'Harvest Season in Huehuetenango', cat: 'Origin Stories', date: 'Sep 30, 2026', read: '8 min', img: '1773118360501-00f979fd9322',
    excerpt: 'We spent two weeks with the Ixchel cooperative. Here’s what we learned about the coffee — and the people.' },
  { slug: 'grind', title: 'Grind Size Explained (With a Cheat Sheet)', cat: 'Brew Guide', date: 'Sep 14, 2026', read: '5 min', img: '1537130508299-46ab547b4be3',
    excerpt: 'From Turkish to French press — why grind matters more than your gear, and how to dial it in.' },
  { slug: 'roast-levels', title: 'Light vs. Dark Roast: Which One Is For You?', cat: 'Coffee 101', date: 'Aug 29, 2026', read: '5 min', img: '1497935586351-b67a49e012bf',
    excerpt: 'Caffeine, flavor, acidity — we bust the most common myths about roast levels.' },
  { slug: 'espresso-home', title: 'Café-Quality Espresso at Home on a Budget', cat: 'Gear', date: 'Aug 10, 2026', read: '7 min', img: '1609050471053-8636409f9f5b',
    excerpt: 'You don’t need a $3,000 machine. Our team’s favorite setups under $500.' },
];
