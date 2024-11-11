import data from '/api/data.js';
const chimeDomain = 'https://chimeracomics.org';
const chimeStyles = `
#chimebar {
  margin: 1rem 0;
  display: table;
  flex-direction: column;
  position: relative;
  font-family: Tahoma, Verdana, Segoe, sans-serif;

  & > a.logo {
    display: block;
    font-size: 1.1rem;
    padding: 0.125rem 0.5rem 0 0.5rem;
    background-image: url('data:image/svg+xml;utf8,<svg height="36.12" viewBox="0 0 231.562 36.12" width="231.562" xmlns="http://www.w3.org/2000/svg"><path d="m27.72 25.095c0-1.26-.42-1.785-1.575-1.785h-5.145c-1.155 0-1.26.84-1.417 1.89-.42 2.52-2.678 3.57-5.513 3.57-3.465 0-5.827-1.89-5.827-5.25v-10.92c0-3.308 2.362-5.25 5.827-5.25 2.835 0 4.305.787 5.408 2.52.419.63.472 1.628 1.574 1.628h5.041c1.207 0 1.627-.263 1.627-1.523-.682-6.668-7.14-9.975-13.65-9.975-6.247 0-14.07 3.622-14.07 11.865v12.39c0 8.243 7.823 11.865 14.07 11.865 6.51 0 13.65-4.252 13.65-11.025z"/><path d="m60.952.788h-5.197c-.945 0-1.522.314-1.522 1.522v11.865h-11.708v-11.865c0-1.208-.525-1.522-1.522-1.522h-5.198c-.945 0-1.522.314-1.522 1.522v31.5c0 1.208.577 1.523 1.522 1.523h5.198c.997 0 1.522-.315 1.522-1.523v-11.865h11.708v11.865c0 1.208.577 1.523 1.522 1.523h5.197c.945 0 1.523-.315 1.523-1.523v-31.5c0-1.208-.578-1.522-1.523-1.522z"/><path d="m85.26 28.14h-3.308v-20.055h3.151c1.207 0 1.522-.577 1.522-1.523v-4.252c0-.945-.315-1.522-1.522-1.522h-14.596c-1.207 0-1.522.577-1.522 1.522v4.252c0 .946.315 1.523 1.522 1.523h3.203v20.055h-3.307c-1.208 0-1.523.578-1.523 1.523v4.147c0 .945.315 1.523 1.523 1.523h14.857c1.207 0 1.523-.578 1.523-1.523v-4.147c0-.945-.316-1.523-1.523-1.523z"/><path d="m124.53.735h-5.04c-1.733 0-1.995 1.155-2.363 1.785l-7.245 12.915-7.192-12.915c-.42-.63-.63-1.785-2.415-1.785h-5.198c-1.207 0-1.522.578-1.522 1.523v31.552c0 1.208.577 1.523 1.522 1.523h5.198c.945 0 1.523-.315 1.523-1.523v-17.797l5.302 9.187c.262.42.683 1.103 1.47 1.103h2.625c.787 0 1.26-.683 1.522-1.103l5.25-9.187v17.797c0 1.208.578 1.523 1.523 1.523h5.04c.945 0 1.522-.315 1.522-1.523v-31.552c0-.945-.315-1.523-1.522-1.523z"/><path d="m158.865 27.956h-16.748v-6.93h14.071c1.207 0 1.522-.577 1.522-1.522v-4.095c0-.945-.315-1.523-1.522-1.523h-14.071v-5.722h15.855c1.208 0 1.523-.578 1.523-1.523v-4.357c0-.945-.315-1.523-1.523-1.523h-22.627c-1.208 0-1.523.578-1.523 1.523v31.5c0 .945.315 1.522 1.523 1.522h23.52c1.207 0 1.522-.577 1.522-1.522v-4.305c0-.945-.315-1.523-1.522-1.523z"/><path d="m195.037 33.653-7.402-10.763c3.255-1.102 7.297-4.935 7.297-10.447 0-3.36-1.102-6.353-3.045-8.243-2.205-2.205-4.725-3.36-10.447-3.36h-13.23c-1.207 0-1.47.578-1.47 1.523v31.447c0 1.208.525 1.523 1.47 1.523h5.198c.944 0 1.522-.315 1.522-1.523v-25.62h6.982c2.731 0 4.83 1.733 4.83 4.463 0 2.467-2.415 4.252-4.987 4.252h-1.05c-1.208 0-1.523.578-1.523 1.523v4.2c0 1.47.105 2.047.578 2.677l5.67 8.452c.735 1.103 1.365 1.576 2.625 1.576h6.195c.997 0 1.26-.945.787-1.68z"/><path d="m231.42 33.862-11.602-31.447c-.473-1.103-.998-1.627-2.153-1.627h-5.04c-1.155 0-1.732.524-2.152 1.627l-11.655 31.447c-.263.631-.263 1.471.892 1.471h5.513c1.155 0 1.575-.315 1.994-1.576l1.471-4.147h12.862l1.47 4.147c.42 1.261.84 1.576 1.995 1.576h5.512c1.156 0 1.156-.84.893-1.471zm-20.212-11.602 3.937-11.602 3.938 11.602z"/></svg>');
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 0 -3px 0.5rem;
    overflow: hidden;
    text-indent: -999vw;

    &:hover ~ .description {
      visibility: visible;
    }
  }

  & > .description {
    background-color: black;
    box-shadow: 0 -16px 0px 0 black;
    color: #ddd;
    padding: 0 0.75rem 0.5rem 0.75rem;
    border-radius: 0 0 0.75vw 0.75vw;
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    width: 100%;
    visibility: hidden;
    
    strong {
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    column-gap: 3px;
    border: 3px solid black;
    border-radius: 0.75vw;
    background-color: black;
    position: relative;

    li {
      a {
        display: block;
        box-shadow: 0 0 0px 2px black;
        border-radius: 0.5vw;
        overflow: hidden;
        position: relative;
        transition: transform 0.125s cubic-bezier(0.25, 0, 0, 1);
        z-index: 1;

        &:hover {
          box-shadow: 0 0 0px 4px black;
          transform: scale(1.15);
          z-index: 2;
        }

        img {
          display: block;
        }
      }

      small {
        background-color: black;
        box-shadow: 0 0 0px 3px black, 0 -12px 0px 3px black;
        color: #ddd;
        padding: 0.5rem 0.75rem 0.125rem 0.75rem;
        border-radius: 0 0 0.75vw 0.75vw;
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        width: 100%;
        visibility: hidden;

        strong {
          font-size: 1.1rem;
          text-transform: uppercase;
        }
      }

      &:hover small {
        visibility: visible;
      }
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

randomizedChimebar.length = 10;

const chimeList = document.createElement('ul');
const chimeLabelString = `<a class="logo" href="https://chimeracomics.org">Chimera</a><small class="description">The <strong>Chimera Comics Collective</strong> is an organization of independent comic creators.</small>`;

randomizedChimebar.forEach((comic) => {
  const barString = `<li><a href="${comic.site}" title="${
    comic.title
  }" target="_blank"><img src="${
    chimeDomain + comic.chimebar
  }" width="60" height="60" alt="${comic.title}" /></a><small><strong>${
    comic.title
  }</strong><br/>${comic.description}</small></li>`;
  chimeList.insertAdjacentHTML('beforeend', barString);
});

document.querySelector('#chimebar').appendChild(chimeList);

document
  .querySelector('#chimebar')
  .insertAdjacentHTML('afterbegin', chimeLabelString, chimeList);

const style = document.createElement('style');
style.innerHTML = chimeStyles;
document.head.appendChild(style);