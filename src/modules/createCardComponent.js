const createCardComponent = (id, imgSrc = '', text = '', likes = 0) => `
    <div class="container_card" id="${id}">
          <img src="${imgSrc}" alt="Image of the movie" class="card-img" />
          <div class="card-content">
            <p class="card-text">${text}</p>
            <div class="likes-container">
            <svg id="heart"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                class="card-likes"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                ></path>
              </svg>
              <span>${likes} Likes</span>
            </div>
          </div>
          <button
            class="card-comment"
            aria-label="Comment on this movie"
            type="button"
          >
            Comment
          </button>
        </div>
      `;

export default createCardComponent;
