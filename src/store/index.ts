import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./addfav-slice";

const store = configureStore({
  reducer: { addFav: favSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
