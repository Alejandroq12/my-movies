const commentCounter = {
  getCommentCount: async (showId) => {
    try {
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments?item_id=${showId}`);
      const data = await response.json();
      return data.length;
    } catch (error) {
      const errorMessage = 'There was an error while fetching comments data.';
      // Display error message to the user instead of logging to console
      const errorContainer = document.createElement('div');
      errorContainer.classList.add('error-message');
      errorContainer.textContent = errorMessage;
      const commentSection = document.getElementById('commentSection');
      commentSection.appendChild(errorContainer);
      return 0; // Return a default value if there's an error
    }
  },
};

export default commentCounter;
