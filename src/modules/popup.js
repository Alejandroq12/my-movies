import fetchComments from './displayComment.js';
import addComment from './addComment.js';
import commentCounter from './commentCounter.js';

export default function initializePopupListeners(shows) {
  const commentBtn = document.querySelectorAll('.card-comment');
  const popMenu = document.querySelector('.seePopup');

  commentBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('no-scroll');
      popMenu.classList.add('act');
      const showData = shows[index];
      popMenu.innerHTML = `
        <div id="commentPopup">
          <div class="imgContainer">
            <img class="commentImg" src="${showData.image.original}" alt="Comment Image"><span class="close-btn">&#x2715;</span>
          </div>
          <<h3 id="commentTitle">${showData.name}</h3>
          <div id="commentDetails">
            <p>Language: ${showData.language}</p>
            <p>Runtime: ${showData.runtime}</p>
            <p>Type: ${showData.type}</p>
            <p>Status: ${showData.status}</p>
            
          </div>
          <div id="commentSection">
            <div id="comments" class="comment-text"><p id="commentCounter">Comments: (<span id="commentCount"></span>)</p></div>
            <p class="comment-text comments"></p>
          </div>
        </div>`;
      const popClose = document.querySelector('.close-btn');
      popClose.addEventListener('click', () => {
        popMenu.classList.remove('act');
        document.body.classList.remove('no-scroll');
      });

      // create the comment form and add it to the popup
      const commentForm = addComment.createCommentForm(showData.id);
      const commentSection = document.getElementById('commentSection');
      commentSection.appendChild(commentForm);

      // fetch and display the existing comments for the show
      fetchComments(showData.id);

      // get the comment count for the show and display it in the popup
      const commentCountElem = document.getElementById('commentCount');
      const commentCount = commentCounter.getCommentCount(showData.id);
      commentCount.then((commentCount) => {
        commentCountElem.innerHTML = commentCount > 0 ? commentCount : '0';
      });
    });
  });
}
