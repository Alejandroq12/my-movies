import fetchTVShow from './fetchTVShow.js';
import createCardComponent from './createCardComponent.js';

const fetchAndUpdateCard = async (showId, cardIndex, shows) => {
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
};

export default fetchAndUpdateCard;
