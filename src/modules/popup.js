// pop-up section
const commentBtn = document.querySelectorAll('.commentBtn');
const popMenu = document.querySelector('.seePopup');

seeProject.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    popMenu.classList.add('act');
    popMenu.innerHTML = `
    <section id="commentPopup">
  <div class="imgContainer">
    <img class= "commentImg" src="/assets/Book1.png" alt="Comment Image"><span class="close-btn">&#x2715;</span>
  </div>
  <h3 id="commentTitle">Space 3</h3>
<div id="commentDetails">
  <p>Fuel: titanium</p>
  <p>Length: 100,000</p>
  <p>Weight: 400</p>
  <p>Power: 100,000,000</p>
</div>
</section>`;

    const popClose = document.querySelector('.close-btn');
    popClose.addEventListener('click', () => {
      popMenu.classList.remove('act');
      document.body.classList.remove('no-scroll');
    });
  });
});