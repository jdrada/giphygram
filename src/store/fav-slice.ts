import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteGifs: [{}],
  totalFavoriteGifs: 0,
};

const favSlice = createSlice({
  name: "addFav",
  initialState,
  reducers: {
    addFavGif(state, action) {
      const newFavorite = action.payload;

      state.favoriteGifs.push(
        {
          id: newFavorite.id,
          title: newFavorite.title,
          url: newFavorite.url,
        },
        state.totalFavoriteGifs++
      );
    },
  },
});
export const favActions = favSlice.actions;
export default favSlice;
