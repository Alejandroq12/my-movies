import './style.css';
import { initializePopupListeners } from './popup.js';

function createCardComponent(index, imgSrc = '', text = '') {
    return `
      <div class="container_card">
        <img src="${imgSrc}" alt="Image of the movie" class="card-img" />
        <div class="card-content">
          <p class="card-text">${text}</p>
          <div class="likes-container">
            <span>5 Likes</span>
          </div>
        </div>
        <button
          class="card-comment"
          aria-label="Comment on this movie"
          type="button"
        >
          Comment
        </button>
      </div>
    `;
}

async function fetchTVShow(showId) {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
    const showData = await response.json();
    return showData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export const shows = [];


async function fetchAndUpdateCard(showId, cardIndex) {
    let showData;
    let validShow = false;
    let currentShowId = showId;
  
    while (!validShow) {
      showData = await fetchTVShow(currentShowId);
  
      if (showData && showData.name && showData.image && showData.image.original) {
        validShow = true;
      } else {
        currentShowId += 1;
      }
    }
    shows.push(showData);

    const cardContainer = document.querySelector('.container');
    const cardComponent = createCardComponent(cardIndex, showData.image.original, showData.name);
    cardContainer.insertAdjacentHTML('beforeend', cardComponent);
}

async function main() {
  const showIds = Array.from({ length: 21 }, (_, index) => index + 1);
  const cardIndices = Array.from({ length: 21 }, (_, index) => `card${index + 1}`);

  for (let index = 0; index < showIds.length; index++) {
    const showId = showIds[index];
    const cardIndex = cardIndices[index];
    await fetchAndUpdateCard(showId, cardIndex);
  }

  initializePopupListeners();
}

main();
