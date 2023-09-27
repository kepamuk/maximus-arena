import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {};

export const arenaSlice = createSlice({
  name: "arena",
  initialState,
  reducers: {
    reducerArena: (state: Draft<any>, action: PayloadAction<any>) => {},
  },
});

export const { reducerArena } = arenaSlice.actions;

export default arenaSlice.reducer;
