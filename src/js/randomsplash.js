const splashItems = document.querySelectorAll('.splash-banner > ul > li');
const randomIdx = Math.floor(Math.random() * splashItems.length);
splashItems[randomIdx].classList.add('show');
