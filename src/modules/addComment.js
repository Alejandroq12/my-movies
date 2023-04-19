import fetchComments from './displayComment.js';

const addComment = async (showId, name, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments', {
    method: 'POST',
    body: JSON.stringify({ item_id: showId, username: name, comment }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes(application/json)) {
    const data = await response.json();
    return data;
  } else {
  return {message:'added successfully'}
  }
//   const data = await response.json();
//   return data;
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

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const comment = event.target.elements.comment.value;

    addComment(showId, name, comment)
      .then(() => {
        event.target.reset();
        fetchComments(showId);
      })
      .catch((error) => {
        console.error('Error adding comment:', error);
      });
  });

  return form;
}

export default { addComment, createCommentForm };
