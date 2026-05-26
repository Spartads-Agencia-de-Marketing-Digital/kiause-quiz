// =============================================
// KIAUSE QUIZ – LÓGICA COMPLETA
// =============================================

// ---------- DATA ----------
const questions = [
  {
    id: 1,
    type: "list",
    num: "Pergunta 1 de 5",
    title: "Que paleta de cores te faz sentir em casa?",
    options: [
      { letter: "A", text: "Branco, cinza suave e bege", value: "A" },
      { letter: "B", text: "Preto, carvão e metálicos", value: "B" },
      { letter: "C", text: "Creme, dourado e castanho", value: "C" },
      { letter: "D", text: "Verde, terra e ocre", value: "D" },
    ],
  },
  {
    id: 2,
    type: "list",
    num: "Pergunta 2 de 5",
    title: "Que tipo de superfície combina mais contigo?",
    options: [
      { letter: "A", text: "Lisa e uniforme", value: "A" },
      { letter: "B", text: "Com veio de madeira", value: "B" },
      { letter: "C", text: "Efeito pedra ou cimento", value: "C" },
      { letter: "D", text: "Textura natural e rústica", value: "D" },
    ],
  },
  {
    id: 3,
    type: "list",
    num: "Pergunta 3 de 5",
    title: "Como descreves o ambiente ideal da tua casa?",
    options: [
      { letter: "A", text: "Calmo e organizado", value: "A" },
      { letter: "B", text: "Ousado e com atitude", value: "B" },
      { letter: "C", text: "Elegante e cuidado", value: "C" },
      { letter: "D", text: "Descontraído e com vida", value: "D" },
    ],
  },
  {
    id: 4,
    type: "image",
    num: "Pergunta 4 de 5",
    title: "Qual destes espaços combina mais contigo?",
    options: [
      { letter: "A", text: "Ripas brancas com luz natural", value: "A", img: "images/style_minimalista.png", alt: "Minimalista Nórdico" },
      { letter: "B", text: "Painéis escuros e textura cimento", value: "B", img: "images/style_industrial.png", alt: "Industrial Urbano" },
      { letter: "C", text: "Boiserie elegante com dourado", value: "C", img: "images/style_classico.png", alt: "Clássico Elegante" },
      { letter: "D", text: "Ripas de madeira com plantas", value: "D", img: "images/style_natural.png", alt: "Natural Boho" },
    ],
  },
  {
    id: 5,
    type: "list",
    num: "Pergunta 5 de 5",
    title: "Que sensação queres sentir cada vez que entras em casa?",
    options: [
      { letter: "A", text: "Tranquilidade: chegar e desligar", value: "A" },
      { letter: "B", text: "Atitude: sentir que o espaço é mesmo meu", value: "B" },
      { letter: "C", text: "Sofisticação: sentir orgulho no que vejo", value: "C" },
      { letter: "D", text: "Aconchego: um espaço que abraça e reconecta", value: "D" },
    ],
  },
];

const results = {
  A: {
    name: "Minimalista / Nórdico",
    emoji: "🤍",
    desc: "O teu espaço é um refúgio de calma. Adoras linhas limpas, muita luz natural e o princípio 'menos é mais'. Cada peça que escolhes tem um propósito.",
    img: "images/style_minimalista.png",
    productHandles: [
      "painel-ripado-branco-madeira-2-49m",
      "painel-ripado-fino-castanho-claro-2-49m",
      "pavimento-vinilico-spc-click-castanho",
    ],
    collection: "https://kiause.pt/collections/estilo-minimalista-nordico/?utm_source=meta&utm_medium=paid_social&utm_campaign=quiz",
    ctaText: "Ver Coleção Minimalista",
    ctaDesc: "Descobre os produtos Kiause que vão dar vida ao teu estilo nórdico.",
  },
  B: {
    name: "Industrial / Urbano",
    emoji: "🖤",
    desc: "Tens personalidade forte e não tens medo de arriscar. O teu espaço reflete uma atitude urbana, com tons escuros, texturas brutas e um charme inegável.",
    img: "images/style_industrial.png",
    productHandles: [
      "painel-ripado-preto-castanho-2-49m",
      "papel-de-parede-cimento-bege",
      "painel-ripado-preto-2-49m",
    ],
    collection: "https://kiause.pt/collections/estilo-de-decoracao-industrial-urbano/?utm_source=meta&utm_medium=paid_social&utm_campaign=quiz",
    ctaText: "Ver Coleção Industrial",
    ctaDesc: "Os produtos Kiause para um estilo urbano que não passa despercebido.",
  },
  C: {
    name: "Clássico / Elegante",
    emoji: "✨",
    desc: "Vives com elegância e atenção ao detalhe. O teu espaço é refinado, atemporal e inspira-se nos grandes palacetes e hotéis de luxo.",
    img: "images/style_classico.png",
    productHandles: [
      "painel-ripado-preto-dourado-2-49m",
      "papel-de-parede-texturizado-dourado",
      "perfil-metalico-em-l-dourado-10mm",
    ],
    collection: "https://kiause.pt/collections/estilo-de-decoracao-classico-elegante/?utm_source=meta&utm_medium=paid_social&utm_campaign=quiz",
    ctaText: "Ver Coleção Clássica",
    ctaDesc: "Descobre os produtos Kiause que trazem elegância atemporal à tua casa.",
  },
  D: {
    name: "Natural / Boho",
    emoji: "🌿",
    desc: "A tua casa é um jardim interior. Valorizas a autenticidade, as texturas orgânicas e a ligação à natureza. O conforto vem de materiais verdadeiros.",
    img: "images/style_natural.png",
    productHandles: [
      "painel-ripado-fino-castanho-claro-2-49m",
      "papel-de-parede-tropical-verde",
      "divisoria-de-ambiente-pvc-padrao-madeira-pinho-7cmx7cm-com-2-8-metros",
    ],
    collection: "https://kiause.pt/collections/estilo-de-decoracao-natural-boho/?utm_source=meta&utm_medium=paid_social&utm_campaign=quiz",
    ctaText: "Ver Coleção Natural",
    ctaDesc: "Painéis e produtos Kiause que trazem a natureza para dentro de casa.",
  },
};

// ---------- STATE ----------
let currentQ = 0;
let answers = [];
let userName = "";

// ---------- DOM REFS ----------
const heroSection   = document.getElementById("hero");
const quizSection   = document.getElementById("quizSection");
const formSection   = document.getElementById("formSection");
const resultSection = document.getElementById("resultSection");
const progressBar   = document.getElementById("progressBar");
const progressLabel = document.getElementById("progressLabel");
const quizContent   = document.getElementById("quizContent");

// ---------- HELPERS ----------
function show(el) { el.style.display = ""; }
function hide(el) { el.style.display = "none"; }
function scrollTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }

function getWinner() {
  const count = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(a => count[a]++);
  const max = Math.max(...Object.values(count));
  const winners = Object.keys(count).filter(k => count[k] === max);
  if (winners.length === 1) return winners[0];
  // tie-break: use answer to Q4 (index 3)
  if (answers[3] && winners.includes(answers[3])) return answers[3];
  return winners[0];
}

function updateProgress() {
  const pct = ((currentQ + 1) / questions.length) * 100;
  progressBar.style.width = pct + "%";
  progressLabel.textContent = questions[currentQ].num;
}

// ---------- RENDER QUESTION ----------
function renderQuestion() {
  const q = questions[currentQ];
  updateProgress();

  let optionsHtml = "";

  if (q.type === "image") {
    optionsHtml = `<div class="options-grid">` +
      q.options.map(o => `
        <div class="option-card has-img" data-value="${o.value}" id="opt-${currentQ}-${o.value}" role="button" tabindex="0" aria-label="${o.text}">
          <div class="option-img-wrap"><img src="${o.img}" alt="${o.alt}" loading="lazy" /></div>
          <div class="option-label">
            <span class="option-letter">${o.letter}</span>
            <span class="option-text">${o.text}</span>
          </div>
        </div>`).join("") +
      `</div>`;
  } else {
    optionsHtml = `<div class="options-list">` +
      q.options.map(o => `
        <div class="option-item" data-value="${o.value}" id="opt-${currentQ}-${o.value}" role="button" tabindex="0" aria-label="${o.text}">
          <span class="option-letter">${o.letter}</span>
          <span class="option-text">${o.text}</span>
        </div>`).join("") +
      `</div>`;
  }

  const isLast = currentQ === questions.length - 1;

  quizContent.innerHTML = `
    <div class="question-block">
      <h2 class="question-title">${q.title}</h2>
      ${optionsHtml}
      <div class="quiz-nav">
        ${currentQ > 0 ? `<button class="btn-back" id="backBtn">← Anterior</button>` : `<span></span>`}
        <button class="btn-next" id="nextBtn">${isLast ? "Ver resultado →" : "Continuar →"}</button>
      </div>
    </div>
  `;

  // Restore selection if navigating back
  if (answers[currentQ]) {
    selectOption(answers[currentQ]);
  }

  // Bind option clicks
  document.querySelectorAll("[data-value]").forEach(el => {
    el.addEventListener("click", () => selectOption(el.dataset.value));
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") selectOption(el.dataset.value); });
  });

  // Back button
  const backBtn = document.getElementById("backBtn");
  if (backBtn) backBtn.addEventListener("click", () => { currentQ--; renderQuestion(); });

  // Next button
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", () => {
    if (!answers[currentQ]) return;
    if (currentQ < questions.length - 1) {
      currentQ++;
      renderQuestion();
      scrollTop();
    } else {
      showForm();
    }
  });
}

function selectOption(value) {
  answers[currentQ] = value;
  // Remove selected from all
  document.querySelectorAll("[data-value]").forEach(el => el.classList.remove("selected"));
  // Add to chosen
  const chosen = document.getElementById(`opt-${currentQ}-${value}`);
  if (chosen) chosen.classList.add("selected");
  // Activate next btn
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.classList.add("active");
}

// ---------- SHOW FORM ----------
function showForm() {
  hide(quizSection);
  show(formSection);
  scrollTop();

  const leadForm = document.getElementById("leadForm");
  leadForm.addEventListener("submit", e => {
    e.preventDefault();
    const name  = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const phone = document.getElementById("userPhone").value.trim();
    if (!name || !email || !phone) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("userEmail").style.borderColor = "#e53935";
      return;
    }
    userName = name;
    const styleKey = getWinner();
    const styleName = results[styleKey]?.name || styleKey;
    fetch("https://script.google.com/macros/s/AKfycbxMkYEcjxUb-7zEctbFKi3BdOC4OrhvwrFRt5peaYggGC8xc5ummhVj9v-ir767ujvs-Q/exec", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ name, email, phone, style: styleName })
    }).catch(() => {});
    showResult();
  });
}

// ---------- SHOW RESULT ----------
async function showResult() {
  hide(formSection);
  show(resultSection);
  scrollTop();

  const winner = getWinner();
  const r      = results[winner];

  const resultHeader = document.getElementById("resultHeader");
  const resultBody   = document.getElementById("resultBody");

  resultHeader.innerHTML = `
    <img src="${r.img}" alt="${r.name}" class="result-hero-bg" />
    <div class="result-hero-overlay">
      <div class="result-style-name">${r.name}</div>
      <div class="result-style-desc">${r.desc}</div>
    </div>
  `;

  const baseBody = (productsHtml) => `
    <p class="result-section-title">O teu estilo</p>
    <h2 class="result-section-heading">Olá, ${userName}! Como conseguir o teu look com a Kiause</h2>
    <div class="products-grid">${productsHtml}</div>
    <div class="cta-block">
      <h3>${r.ctaText}</h3>
      <p>${r.ctaDesc}</p>
      <a href="${r.collection}" target="_blank" class="btn-coral">Ver toda a coleção →</a>
      <br>
      <span class="discount-badge">10% de desconto na 1ª compra com código: QUIZ10</span>
    </div>
    <div class="result-restart">
      <button class="btn-ghost" id="restartBtn">Repetir o quiz</button>
    </div>
  `;

  // Loading state
  resultBody.innerHTML = baseBody(`<div class="products-loading"><span></span><span></span><span></span></div>`);
  bindRestartBtn();

  // Fetch real products from Shopify public API
  try {
    const products = await Promise.all(
      r.productHandles.map(handle =>
        fetch(`https://kiause.pt/products/${handle}.json`)
          .then(res => { if (!res.ok) throw new Error(); return res.json(); })
          .then(d => {
            const p     = d.product;
            const variant   = p.variants[0] || {};
            const price     = parseFloat(variant.price || 0);
            const unitPrice = parseFloat(variant.unit_price || 0);
            const refUnit   = variant.unit_price_measurement?.reference_unit;

            let priceLabel;
            if (unitPrice && refUnit === "m2") {
              priceLabel = `${unitPrice.toFixed(2).replace(".", ",")} €/m²`;
            } else {
              priceLabel = `${price.toFixed(2).replace(".", ",")} €`;
            }

            const img = p.images[0]?.src
              ? p.images[0].src.replace(/(\.[^.]+)$/, "_400x$1")
              : null;

            return { name: p.title, img, priceLabel, url: `https://kiause.pt/products/${p.handle}?utm_source=meta&utm_medium=paid_social&utm_campaign=quiz` };
          })
      )
    );

    const productsHtml = products.map(p => `
      <a class="product-card" href="${p.url}" target="_blank" rel="noopener">
        ${p.img ? `<div class="product-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy" /></div>` : ""}
        <div class="product-info">
          <p class="product-name">${p.name}</p>
          <p class="product-price">${p.priceLabel}</p>
        </div>
      </a>
    `).join("");

    resultBody.innerHTML = baseBody(productsHtml);
  } catch {
    // fallback: link to collection
    const fallback = `
      <div class="products-fallback">
        <p>Descobre os produtos da coleção na loja Kiause.</p>
        <a href="${r.collection}" target="_blank" class="btn-coral" style="margin-top:12px">Ver produtos →</a>
      </div>`;
    resultBody.innerHTML = baseBody(fallback);
  }

  bindRestartBtn();
}

function bindRestartBtn() {
  const btn = document.getElementById("restartBtn");
  if (btn) btn.addEventListener("click", () => {
    currentQ = 0;
    answers  = [];
    userName = "";
    hide(resultSection);
    show(heroSection);
    scrollTop();
  });
}

// ---------- START ----------
document.getElementById("startBtn").addEventListener("click", () => {
  hide(heroSection);
  show(quizSection);
  currentQ = 0;
  answers  = [];
  renderQuestion();
  scrollTop();
});
