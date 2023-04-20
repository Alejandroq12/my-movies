const updateLikesCount = (likesData) => {
  const likeElements = document.querySelectorAll('.likes-container span');

  likeElements.forEach((likeElement) => {
    const itemId = likeElement.parentElement.parentElement.parentElement.id;

    const foundItem = likesData.find((item) => item.item_id === itemId);

    if (foundItem) {
      likeElement.textContent = `${foundItem.likes} Likes`;
    } else {
      likeElement.textContent = '0 Likes';
    }
  });
};

export default updateLikesCount;
