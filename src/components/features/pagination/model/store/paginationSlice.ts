/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  startIndex: number;
}

const initialState: InitialState = {
  startIndex: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    increment(state) {
      state.startIndex += 30;
    },
    reset(state) {
      state.startIndex = 0;
    },
  },
});

export default paginationSlice.reducer;
export const { increment, reset } = paginationSlice.actions;
