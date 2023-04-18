import './style.css';

async function fetchTVShow(showId) {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
    const showData = await response.json();
    return showData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function updateCard(cardIndex, showData) {
  const cardImg = document.querySelector(`.card-${cardIndex}__img`);
  const cardText = document.querySelector(`.card-${cardIndex}__text`);

  cardText.innerText = showData.name;

  if (showData.image && showData.image.original) {
    cardImg.src = showData.image.original;
  } else {
    cardImg.src = ''; // Set a default image URL if there's no image available
  }
}

async function fetchAndUpdateCard(showId, cardIndex) {
  const showData = await fetchTVShow(showId);
  updateCard(cardIndex, showData);
}


