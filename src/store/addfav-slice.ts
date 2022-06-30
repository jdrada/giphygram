import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

// favoriteGifs types
const favoriteGifs: {
  key: number;
  id: number;
  title: string;
  url: string;
}[] = [];

//initial state
const initialState = {
  favoriteGifs,
  favoriteCounter: 0,
  isFavorite: false,
};

const favSlice = createSlice({
  name: "addFavoriteGif",
  initialState,
  reducers: {
    isFavorite(state) {
      state.isFavorite = true;
    },
    addFavGif(state, action) {
      const newFavorite = action.payload;

      const existingFavorite = state.favoriteGifs.find(
        (fav) => fav.id === newFavorite.id
      );

      if (!existingFavorite) {
        state.favoriteGifs.push({
          key: newFavorite.id,
          id: newFavorite.id,
          title: newFavorite.title,
          url: newFavorite.url,
        });
      } else {
        state.favoriteGifs.filter((fav) => fav.id === newFavorite.id);
      }
    },
    favCounter(state) {
      if (state.isFavorite) {
        state.favoriteCounter++;
      } else {
        state.favoriteCounter--;
      }
    },
  },
});
export const addFavActions = favSlice.actions;

export default favSlice;
