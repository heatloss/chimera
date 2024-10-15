import data from '/api/data.js';

const togglers = document.querySelectorAll('[data-toggler]');
const gridForm = document.querySelector('#comics-list-options');
const gridComics = document.querySelectorAll('.comic-grid > li');

const toggleExpandList = (e) => {
  e.preventDefault();
  e.stopPropagation();
	const toggleBlock = e.currentTarget.closest("[data-toggleblock]");
  const toggledState = toggleBlock.dataset.toggleblock === 'closed' ? 'open' : 'closed';
  toggleBlock.dataset.toggleblock = toggledState;
};

const updateGrid = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const formState = new FormData(e.currentTarget);
  const genreList = formState.getAll('genres');
  const tagList = formState.getAll('generalTags');
  const statusList = formState.getAll('statuses');

  gridForm.querySelector(".discloser-toggle[data-collection = 'genres']").textContent = genreList.length > 0 ? genreList.length : 'All';
  gridForm.querySelector(".discloser-toggle[data-collection = 'tags']").textContent = tagList.length > 0 ? tagList.length : 'All';
  gridForm.querySelector(".discloser-toggle[data-collection = 'statuses']").textContent = statusList.length > 0 ? statusList.length : 'All';

  const filteredComics = data.comics
    .map((comic) => {
      let comicVisible = true;
      if (genreList.length > 0) {
        comicVisible = genreList.some((genre) => comic.genre.includes(genre))
          ? comicVisible
          : false;
      }
      if (tagList.length > 0) {
        comicVisible = tagList.some((tag) => comic.tags.includes(tag))
          ? comicVisible
          : false;
      }
      if (statusList.length > 0) {
        comicVisible = statusList.some((status) => comic.status === status)
          ? comicVisible
          : false;
      }
      return comicVisible ? comic : null;
    })
    .filter(Boolean);
		console.log(filteredComics)

  gridComics.forEach((comicLi) => {
    if (filteredComics.some((comic) => comic.title === comicLi.dataset.title)) {
      delete comicLi.dataset.hidden;
    } else {
			comicLi.dataset.hidden = 'true'; 
    }
  });
};

togglers.forEach((toggler) => {
  toggler.addEventListener('click', toggleExpandList);
});

gridForm.addEventListener('change', updateGrid);
