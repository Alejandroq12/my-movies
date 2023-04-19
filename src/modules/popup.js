import fetchComments from './displayComment.js';

export default function initializePopupListeners(shows) {
  const commentBtn = document.querySelectorAll('.card-comment');
  const popMenu = document.querySelector('.seePopup');

  commentBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('no-scroll');
      popMenu.classList.add('act');
      const showData = shows[index];
      popMenu.innerHTML = `
        <section id="commentPopup">
          <div class="imgContainer">
            <img class="commentImg" src="${showData.image.original}" alt="Comment Image"><span class="close-btn">&#x2715;</span>
          </div>
          <h3 id="commentTitle">${showData.name}</h3>
          <div id="commentDetails">
            <p>Language: ${showData.language}</p>
            <p>Runtime: ${showData.runtime}</p>
            <p>Type: ${showData.type}</p>
            <p>Status: ${showData.status}</p>
          </div>
          <div>
            <h3 id="comments" class="comment-text">Comments</h3>
            <p class="comment-text comments"></p>
          </div>
        </section>`;
      const popClose = document.querySelector('.close-btn');
      popClose.addEventListener('click', () => {
        popMenu.classList.remove('act');
        document.body.classList.remove('no-scroll');
      });
      fetchComments(showData.id);
    });
  });
}
