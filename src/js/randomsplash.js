const splashState = {};

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
  splashItems.forEach((splashItem) => {
    splashItem.classList.remove('active');
  });
  splashItemsBox
    .querySelectorAll(':scope > li')
    [2 + dir].classList.add('active');
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
    const lastSplashItem = splashItemsBox.querySelector(
      ':scope > li:last-child',
    );
    splashItemsBox.prepend(lastSplashItem);
  }
  splashBanner.classList.remove('advance');
  splashBanner.dataset.advance = 0;
};

const handleTouchScroll = (e) => {
  splashState.scrolling = true;
  if (!splashState.timer) {
    splashState.timer = setInterval(debounceTouchScroll, 50);
  }
};

const debounceTouchScroll = (e) => {
  if (splashState.scrolling) {
    splashState.scrolling = false;
  } else {
    clearInterval(splashState.timer);
    splashState.timer = null;
    resetSplashTouch();
  }
};

const resetSplashTouch = (e) => {
  const splashItemsArray = Array.from(
    splashItemsBox.querySelectorAll(':scope > li'),
  );
  const splashActive = splashItemsBox.querySelector('.active');
  const splashIndex = splashItemsArray.indexOf(splashActive);
  if (splashIndex < 2) {
    const lastSplashItem = splashItemsBox.querySelector(
      ':scope > li:last-child',
    );
    splashItemsBox.prepend(lastSplashItem);
    splashItemsBox.scrollBy(0.4 * document.body.clientWidth, 0);
  } else if (splashIndex > splashItems.length - 3) {
    const firstSplashItem = splashItemsBox.querySelector(
      ':scope > li:first-child',
    );
    splashItemsBox.append(firstSplashItem);
    splashItemsBox.scrollBy(-0.4 * document.body.clientWidth, 0);
  }
};

const updateSplashObserver = (entries, observer) => {
  const markActive = (theEntry) => {
    splashItems.forEach((splashItem) => {
      splashItem.classList.remove('active');
    });
    theEntry.classList.add('active');
  };

  entries.forEach((entry) => {
    entry.isIntersecting ? markActive(entry.target) : null;
  });
};

if (matchMedia('(pointer:coarse)').matches) {
  const options = {
    root: splashItemsBox,
    rootMargin: '0px',
    threshold: 1.0,
  };
  const observer = new IntersectionObserver(updateSplashObserver, options);
  splashItems.forEach((splashItem) => {
    observer.observe(splashItem);
  });
  splashItemsBox.scrollTo(1.5 * document.body.clientWidth, 0);
  splashItemsBox.addEventListener('scroll', handleTouchScroll);
} else {
  splashControls.forEach((button) => {
    button.addEventListener('click', advanceSplash);
  });
  splashBanner.addEventListener('transitionend', resetSplash);
}
