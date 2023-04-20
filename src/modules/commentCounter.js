const commentCounter = {
  getCommentCount: async (showId) => {
    try {
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments?item_id=${showId}`);
      const data = await response.json();
      return data.length;
    } catch (error) {
      // console.error(error);
    }
    return 0;
  },
};

export default commentCounter;