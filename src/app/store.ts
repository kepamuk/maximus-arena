import { configureStore } from "@reduxjs/toolkit";

import reducerArena from "../redux/reducers/reducerArena";

const store = configureStore({
  reducer: {
    arena: reducerArena,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
