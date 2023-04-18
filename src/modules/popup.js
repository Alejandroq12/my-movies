// pop-up section
import { shows } from '../index.js';

export function initializePopupListeners() {
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
    <img class= "commentImg" src="${showData.image.original}" alt="Comment Image"><span class="close-btn">&#x2715;</span>
  </div>
  <h3 id="commentTitle">${showData.name}</h3>
<div id="commentDetails">
  <p>Language: ${showData.language}</p>
  <p>runtime: ${showData.runtime}</p>
  <p>type: ${showData.type}</p>
  <p>status: ${showData.status}</p>
</div>
</section>`;

      const popClose = document.querySelector('.close-btn');
      popClose.addEventListener('click', () => {
        popMenu.classList.remove('act');
        document.body.classList.remove('no-scroll');
      });
    });
  });
}