export default function searchMovie(movies) {
  const searchBar = document.getElementById('searchBar');

  searchBar.addEventListener('submit', (event) => {
    event.preventDefault();

    const query = document.getElementById('search').value.trim().toLowerCase();
    if (query === '') {
      return;
    }

    let movieFound = false;
    movies.forEach((
      {
        name, image, language, runtime, type, status,
      },
    ) => {
      const title = name.toLowerCase();
      if (title.includes(query)) {
        const popMenu = document.querySelector('.seePopup');
        popMenu.classList.add('act');
        document.body.classList.toggle('no-scroll');
        popMenu.innerHTML = `
          <div id="commentPopup">
            <div class="imgContainer">
              <img class="commentImg" src="${image.original}" alt="Comment Image">
              <span class="close-btn">&#x2715;</span>
            </div>
            <h3 id="commentTitle">${name}</h3>
            <div id="commentDetails">
              <p>Language: ${language}</p>
              <p>Runtime: ${runtime}</p>
              <p>Type: ${type}</p>
              <p>Status: ${status}</p>
            </div>
          </div>
        `;
        const popClose = document.querySelector('.close-btn');
        popClose.addEventListener('click', () => {
          popMenu.classList.remove('act');
          document.body.classList.remove('no-scroll');
        });
        movieFound = true;
      }
    });

    if (!movieFound) {
      const popMenu = document.querySelector('.seePopup');
      popMenu.classList.add('act');
      document.body.classList.toggle('no-scroll');
      popMenu.innerHTML = `
        <div id="commentPopup">
          <h3 id="commentTitle">No matching movies found</h3>
          <span class="close-btn">&#x2715;</span>
        </div>
      `;
      const popClose = document.querySelector('.close-btn');
      popClose.addEventListener('click', () => {
        popMenu.classList.remove('act');
        document.body.classList.remove('no-scroll');
      });
    }
    document.getElementById('search').value = '';
  });
}
