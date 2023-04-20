const fetchTVShow = async (showId) => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
    const showData = await response.json();
    return showData;
  } catch (error) {
    return null;
  }
};

export default fetchTVShow;
