import './style.css';
import initializePopupListeners from './modules/popup.js';
import countMovies from './modules/counter.js';

const involvementApiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

function createCardComponent(id, imgSrc = '', text = '', likes = 0) {
  return `
  <div class="container_card" id="${id}">
        <img src="${imgSrc}" alt="Image of the movie" class="card-img" />
        <div class="card-content">
          <p class="card-text">${text}</p>
          <div class="likes-container">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="card-likes"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              ></path>
            </svg>
            <span>${likes} Likes</span>
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
    return null;
  }
}

const shows = [];
export default shows;

async function fetchAndUpdateCard(showId, cardIndex) {
  const fetchValidShowData = async (currentShowId) => {
    const show = await fetchTVShow(currentShowId);
    if (show && show.name && show.image && show.image.original) {
      return show;
    }
    return fetchValidShowData(currentShowId + 1);
  };

  const showData = await fetchValidShowData(showId);

  shows.push(showData);

  const cardContainer = document.querySelector('.container');
  const cardComponent = createCardComponent(cardIndex, showData.image.original, showData.name);
  cardContainer.insertAdjacentHTML('beforeend', cardComponent);
}

async function fetchLikes(appId) {
  try {
    const response = await fetch(`${involvementApiBaseURL}/apps/${appId}/likes`);
    const likesData = await response.json();
    return likesData;
  } catch (error) {
    // console.error('Error fetching likes:', error);
    return [];
  }
}

function updateLikesCount(likesData) {
  const likeElements = document.querySelectorAll('.likes-container span');

  likeElements.forEach((likeElement) => {
    const itemId = likeElement.parentElement.parentElement.parentElement.id;

    const foundItem = likesData.find((item) => item.item_id === itemId);

    if (foundItem) {
      likeElement.textContent = `${foundItem.likes} Likes`;
    } else {
      likeElement.textContent = '0 Likes';
    }
  });
}

function attachLikeButtonListener() {
  const appId = 'p01X0Mr4syDGinD4IhgC';
  const likeButtons = document.querySelectorAll('.card-likes');

  const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('show');
    }, 50);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 2000);
  };

  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', async (event) => {
      const card = event.target.closest('.container_card');
      const itemId = card.id;

      const response = await fetch(`${involvementApiBaseURL}/apps/${appId}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
        }),
      });

      if (response.ok) {
        // Update the likes count on the screen
        const likesSpan = card.querySelector('.likes-container span');
        const currentLikes = parseInt(likesSpan.textContent.split(' ')[0], 10);
        likesSpan.textContent = `${currentLikes + 1} Likes`;

        // Change the heart icon color to red and show the notification
        event.target.style.stroke = 'red';
        showNotification('Like added!');

        // Revert the heart icon color back to the original after 2 seconds
        setTimeout(() => {
          event.target.style.stroke = 'currentColor';
        }, 2000);
      }
    });
  });
}

function updateMovieCount() {
  const movieCountElement = document.querySelector('.movie-count');
  const movieCount = countMovies();
  movieCountElement.textContent = `(${movieCount})`;
}

async function main() {
  const appId = 'p01X0Mr4syDGinD4IhgC';

  const showIds = Array.from({ length: 21 }, (_, index) => index + 1);
  const cardIndices = Array.from({ length: 21 }, (_, index) => `card${index + 1}`);

  await Promise.all(
    showIds.map(async (showId, index) => {
      const cardIndex = cardIndices[index];
      await fetchAndUpdateCard(showId, cardIndex);
    }),
  );

  const likesData = await fetchLikes(appId);
  updateLikesCount(likesData);
  attachLikeButtonListener();
  initializePopupListeners(shows);
  updateMovieCount();
}

main();
