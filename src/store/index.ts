import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./addfav-slice";
import viewedSlice from "./addViewed-slice";

const store = configureStore({
  reducer: { addFav: favSlice.reducer, addViewed: viewedSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
