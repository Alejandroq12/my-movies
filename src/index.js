import './style.css';
import initializePopupListeners from './modules/popup.js';
import fetchAndUpdateCard from './modules/fetchAndUpdateCard.js';
import fetchLikes from './modules/fetchLikes.js';
import updateLikesCount from './modules/updateLikesCount.js';
import attachLikeButtonListener from './modules/attachLikeButtonListener.js';
import updateMovieCount from './modules/updateMovieCount.js';
import searchMovie from './modules/search.js';

const shows = [];

async function main() {
  const appId = 'p01X0Mr4syDGinD4IhgC';

  const showIds = Array.from({ length: 100 }, (_, index) => index + 1);
  const cardIndices = Array.from({ length: 100 }, (_, index) => `card${index + 1}`);

  await Promise.all(
    showIds.map(async (showId, index) => {
      const cardIndex = cardIndices[index];
      await fetchAndUpdateCard(showId, cardIndex, shows);
    }),
  );

  const likesData = await fetchLikes(appId);
  updateLikesCount(likesData);
  attachLikeButtonListener();
  initializePopupListeners(shows);
  updateMovieCount();
  searchMovie(shows);
}

main();
