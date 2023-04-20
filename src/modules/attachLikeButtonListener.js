import showNotification from './showNotification.js';

const involvementApiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const attachLikeButtonListener = () => {
  const appId = 'p01X0Mr4syDGinD4IhgC';
  const likeButtons = document.querySelectorAll('.card-likes');

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
};

export default attachLikeButtonListener;
