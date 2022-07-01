import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const favoriteGifs: {
  key: number;
  id: number;
  title: string;
  url: string;
  isFav: boolean;
}[] = [];

const initialState = {
  favoriteGifs,
  favoriteCounter: 0,
};

const favSlice = createSlice({
  name: "addFavoriteGif",
  initialState,
  reducers: {
    addFavGif(state, action) {
      const newFavorite = action.payload;

      const existingFavorite = state.favoriteGifs.find(
        (fav) => fav.id === newFavorite.id
      );

      if (!existingFavorite) {
        state.favoriteGifs.unshift({
          key: newFavorite.id,
          id: newFavorite.id,
          title: newFavorite.title,
          url: newFavorite.url,
          isFav: newFavorite.isFav,
        });
      }
    },
    removeFavGif(state, action) {
      const removedFavorite = action.payload;
      const gifToRemove = removedFavorite.id;
      const isFavorite = removedFavorite.isFav;

      if (isFavorite) {
        state.favoriteGifs = state.favoriteGifs.filter(
          (gif) => gif.id !== gifToRemove
        );
      }
    },
  },
});
export const addFavActions = favSlice.actions;

export default favSlice;
