/* ============================================================
   ECG NA PRÁTICA — script.js
   ============================================================ */

/* 1. Scroll reveal — fade-up
   ============================================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


/* 2. Smooth scroll para âncoras
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* 3. Sticky popup
   ============================================================ */
(function () {
  const popup    = document.getElementById('sticky-popup');
  const closeBtn = popup.querySelector('.sticky-popup-close');
  const pricing  = document.getElementById('garantir');

  if (sessionStorage.getItem('popup-closed')) return;

  let popupShown = false;

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function handleScroll() {
    if (sessionStorage.getItem('popup-closed')) return;

    const scrolled    = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress    = totalHeight > 0 ? scrolled / totalHeight : 0;

    if (progress >= 0.40) {
      popupShown = true;
    }

    if (pricing && isInViewport(pricing)) {
      popup.classList.remove('visible');
    } else if (popupShown) {
      popup.classList.add('visible');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  closeBtn.addEventListener('click', function () {
    popup.classList.remove('visible');
    sessionStorage.setItem('popup-closed', '1');
  });

  popup.querySelector('.sticky-popup-cta').addEventListener('click', function () {
    popup.classList.remove('visible');
  });
})();


/* 4. Tracking hooks — descomente e preencha as URLs ao ativar
   ============================================================ */
/*
document.querySelectorAll('[data-event="purchase_click"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const lote  = btn.dataset.lote;
    const value = parseFloat(btn.dataset.value);

    // Google Analytics 4
    // gtag('event', 'begin_checkout', { currency: 'BRL', value });

    // Meta Pixel
    // fbq('track', 'InitiateCheckout', { value, currency: 'BRL' });

    // Redireciona para o checkout do lote selecionado
    // const urls = { '1': 'URL_CHECKOUT_LOTE_1', '2': 'URL_CHECKOUT_LOTE_2', '3': 'URL_CHECKOUT_LOTE_3' };
    // window.location.href = urls[lote] || '#';
  });
});
*/
