import fetchComments from './displayComment.js';
import commentCounter from './commentCounter.js';

const addComment = async (showId, name, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments', {
    method: 'POST',
    body: JSON.stringify({ item_id: showId, username: name, comment }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const textResponse = await response.text();
  let data;
  try {
    data = JSON.parse(textResponse);
  } catch (error) {
    data = { message: textResponse };
  }
  return data;
};

function createCommentForm(showId) {
  const form = document.createElement('form');
  form.innerHTML = `
      <h3 class="comment-text">Add Comment</h3>
        <input type="text" id="name" name="name" placeholder= "Your Name" required>
        <textarea id="comment" name="comment" placeholder= "Your Insights" required></textarea>
      <div>
        <button type="submit" class="comment-btn">Comment</button>
      </div>
    `;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const comment = event.target.elements.comment.value;

    try {
      await addComment(showId, name, comment);
      event.target.reset();
      fetchComments(showId);

      // Update the comment count after adding a new comment and fetching comments
      const commentCountElem = document.getElementById('commentCount');
      const commentCount = await commentCounter.getCommentCount(showId); // Add await here
      commentCountElem.innerHTML = commentCount > 0 ? commentCount : '0';
    } catch (error) {
      const errorMessage = 'There was an error while counting comments.';
      // Display error message to the user instead of logging to console
      const errorContainer = document.createElement('div');
      errorContainer.classList.add('error-message');
      errorContainer.textContent = errorMessage;
      const commentSection = document.getElementById('commentSection');
      commentSection.appendChild(errorContainer);
      return 0; // Return a default value if there's an error
    }
    return 0;
  });

  return form;
}

export default { addComment, createCommentForm };