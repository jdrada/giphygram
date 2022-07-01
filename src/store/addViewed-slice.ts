import { createSlice } from "@reduxjs/toolkit";

const viewedGifs: {
  key: number;
  id: string;
  title: string;
  url: string;
}[] = [];

const viewedSlice = createSlice({
  name: "addviwedGif",
  initialState: {
    viewedGifs,
  },
  reducers: {
    addViewedGif(state, action) {
      const newViewd = action.payload;

      const existingViewd = state.viewedGifs.find(
        (fav) => fav.id === newViewd.id
      );

      if (!existingViewd) {
        state.viewedGifs.unshift({
          key: newViewd.id,
          id: newViewd.id,
          title: newViewd.title,
          url: newViewd.url,
        });
      }
    },
  },
});
export const addViewedActions = viewedSlice.actions;

export default viewedSlice;
