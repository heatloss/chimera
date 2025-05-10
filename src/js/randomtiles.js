const randomizeTiles = (tiles) => {
  const tilesArray = Array.from(tiles);
  const randomizedOrderNums = [...tilesArray.keys()]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  tilesArray.forEach((tile, index) => {
    tile.style.order = randomizedOrderNums[index];
  });
};

const comicTiles = document.querySelectorAll('.comic-grid > li');
randomizeTiles(comicTiles);
