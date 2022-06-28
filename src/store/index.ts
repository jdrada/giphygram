import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./fav-slice";

const store = configureStore({
  reducer: { addFav: favSlice.reducer },
});

export default store;
