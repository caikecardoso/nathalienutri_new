// ======================================================
// NATHALYE MATOS - MAIN.JS
// Versão 3.0
// ======================================================

// ======================================================
// CONFIGURAÇÕES GLOBAIS
// ======================================================

const CONFIG = {

// Tempo parado para leitura
depoimentosInterval: 7000,
faqInterval: 8000,

// Velocidade da animação de transição
transitionDuration: 2500,

// Espaçamento entre cards
cardGap: 24

};

// ======================================================
// SCROLL SUAVE
// ======================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener('click', function (e) {


e.preventDefault();

const target = document.querySelector(
  this.getAttribute('href')
);

if (target) {

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

}


});

});

// ======================================================
// ANIMAÇÕES AO ROLAR
// ======================================================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {


if (entry.isIntersecting) {
  entry.target.classList.add('show');
}


});

}, {
threshold: 0.10
});

document
.querySelectorAll(
'section, .card, .depoimento-card, .faq-item'
)
.forEach(el => {


el.classList.add('hidden');
observer.observe(el);


});

// ======================================================
// FAQ CARDS
// ======================================================

document
.querySelectorAll('.faq-question')
.forEach(question => {


question.addEventListener('click', () => {

  const item = question.closest('.faq-item');

  item.classList.toggle('active');

});


});

// ======================================================
// ANIMAÇÃO DE SCROLL CUSTOMIZADA
// ======================================================

function smoothScrollTo(
element,
target,
duration = CONFIG.transitionDuration
) {

const start = element.scrollLeft;

const distance = target - start;

let startTime = null;

function animation(currentTime) {


if (!startTime) {
  startTime = currentTime;
}

const elapsed =
  currentTime - startTime;

const progress =
  Math.min(elapsed / duration, 1);

element.scrollLeft =
  start + (distance * progress);

if (progress < 1) {
  requestAnimationFrame(animation);
}


}

requestAnimationFrame(animation);

}

// ======================================================
// DEPOIMENTOS
// ======================================================

const depoimentos =
  document.querySelector('.depoimentos-carousel');

const depoPrev =
  document.querySelector('.prev-btn');

const depoNext =
  document.querySelector('.next-btn');

if (depoimentos && depoPrev && depoNext) {

  depoPrev.addEventListener('click', () => {

    depoimentos.scrollBy({
      left: -400,
      behavior: 'smooth'
    });

  });

  depoNext.addEventListener('click', () => {

    depoimentos.scrollBy({
      left: 400,
      behavior: 'smooth'
    });

  });

}

// ======================================================
// FAQ
// ======================================================

const faq =
  document.querySelector('.faq-carousel');

const faqPrev =
  document.querySelector('.faq-prev');

const faqNext =
  document.querySelector('.faq-next');

if (faq && faqPrev && faqNext) {

  faqPrev.addEventListener('click', () => {

    faq.scrollBy({
      left: -400,
      behavior: 'smooth'
    });

  });

  faqNext.addEventListener('click', () => {

    faq.scrollBy({
      left: 400,
      behavior: 'smooth'
    });

  });

}