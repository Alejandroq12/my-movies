import countMovies from '../modules/counterMovies.js';

describe('countMovies', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container">
        <div class="container_card"></div>
        <div class="container_card"></div>
        <div class="container_card"></div>
      </div>
    `;
  });

  test('should return the correct number of movies', () => {
    const movieCount = countMovies();
    expect(movieCount).toBe(3);
  });

  test('should return 0 when there are no movies', () => {
    document.body.innerHTML = `
      <div class="container">
      </div>
    `;
    const movieCount = countMovies();
    expect(movieCount).toBe(0);
  });
});
