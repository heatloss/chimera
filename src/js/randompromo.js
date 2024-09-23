const promos = document.querySelectorAll('.promo-banner > ul > li');
const randomIdx = Math.floor(Math.random() * promos.length);
promos[randomIdx].classList.add('show');
