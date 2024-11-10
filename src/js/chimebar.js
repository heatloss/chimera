import data from '/api/data.js';
const chimeDomain = 'https://chimeracomics.org';
const chimeStyles = `
#chimebar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;

  li {
    img {
      display: block;
    }
  }
}
`;

const chimebarComics = data.comics
  .map((comic) => {
    return comic.chimebar.length > 0 ? comic : null;
  })
  .filter(Boolean);

const randomizedChimebar = chimebarComics
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

randomizedChimebar.length = 7;

const chimeList = document.createElement('ul');

randomizedChimebar.forEach((comic) => {
  const barString = `<li><img src="${
    chimeDomain + comic.chimebar
  }" width="60" height="60" alt="${comic.title}" /></li>`;
  chimeList.insertAdjacentHTML('beforeend', barString);
});

document.querySelector('#chimebar').appendChild(chimeList);

const style = document.createElement('style');
style.innerHTML = chimeStyles;
document.head.appendChild(style);
