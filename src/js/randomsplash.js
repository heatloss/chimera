const randomizeNodeList = (nodeItems) => {
  const randomizedItems = Array.from(nodeItems)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  let fragment = document.createDocumentFragment();
  randomizedItems.forEach((node) => {
    fragment.appendChild(node);
  });
  return fragment;
};

const splashBanner = document.querySelector('.splash-banner');
const splashControls = splashBanner.querySelectorAll(
  '.splash-controls .splash-control button',
);
const splashItemsBox = splashBanner.querySelector('ul');
const splashItems = splashItemsBox.querySelectorAll(':scope > li');
splashItemsBox.appendChild(randomizeNodeList(splashItems));
splashItemsBox.querySelectorAll(':scope > li')[2].classList.add('active');

const advanceSplash = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const dir = parseInt(e.target.value, 10);
  splashBanner.dataset.advance = dir;
  splashBanner.classList.add('advance');
  splashItems.forEach(splashItem => {
    splashItem.classList.remove('active');
  })
  splashItemsBox.querySelectorAll(':scope > li')[2 + dir].classList.add('active');
  // console.log(3 + dir)
  // console.log(splashItemsBox.querySelectorAll(':scope > li')[3 + dir])
};

const resetSplash = (e) => {
  if (e.target !== splashItemsBox) {
    return false;
  }
  if (splashBanner.dataset.advance === '1') {
    const firstSplashItem = splashItemsBox.querySelector(
      ':scope > li:first-child',
    );
    splashItemsBox.append(firstSplashItem);
  } else {
    const firstSplashItem = splashItemsBox.querySelector(
      ':scope > li:last-child',
    );
    splashItemsBox.prepend(firstSplashItem);
  }
  splashBanner.classList.remove('advance');
  splashBanner.dataset.advance = 0;
};

splashControls.forEach((button) => {
  button.addEventListener('click', advanceSplash);
});
splashBanner.addEventListener('transitionend', resetSplash);
