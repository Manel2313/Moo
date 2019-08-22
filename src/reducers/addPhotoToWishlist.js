const addPhotoToWishlist = (state = [], action) => {
  switch (action.type) {
    case "ADD_PHOTO":
      return (state = [...state, action.value]);

    default:
      return state;
  }
};

export default addPhotoToWishlist;
