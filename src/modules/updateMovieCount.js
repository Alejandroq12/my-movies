import countMovies from './counterMovies.js';

const updateMovieCount = () => {
  const movieCountElement = document.querySelector('.movie-count');
  const movieCount = countMovies();
  movieCountElement.textContent = `(${movieCount})`;
};

export default updateMovieCount;
