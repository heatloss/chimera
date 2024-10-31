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

const splashItems = document.querySelectorAll('.splash-banner > ul > li');
splashItems[0].parentNode.appendChild(randomizeNodeList(splashItems));
