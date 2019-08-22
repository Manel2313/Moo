import { createStore, combineReducers } from "redux";
import addPhotoToWishlist from "./reducers/addPhotoToWishlist.js";

const store = createStore(
  combineReducers({
    addPhotoToWishlist: addPhotoToWishlist
  })
);

export default store;
