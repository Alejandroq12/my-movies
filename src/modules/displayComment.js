const commentDataAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments';

async function fetchComments(showId) {
  try {
    const response = await fetch(`${commentDataAPI}?item_id=${showId}`);
    const comments = await response.json();
    const commentText = document.querySelector('.comments');
    commentText.innerHTML = comments.length > 0 ? comments.map((comment) => `<p>${comment.creation_date} - ${comment.username}: ${comment.comment}</p>`).join('') : 'No comments yet.';
  } catch (err) {
    const errorText = document.createElement('p');
    errorText.innerText = 'Error fetching comments. Please try again later.';
    const commentText = document.querySelector('.comments');
    commentText.appendChild(errorText);
  }
}
export default fetchComments;
