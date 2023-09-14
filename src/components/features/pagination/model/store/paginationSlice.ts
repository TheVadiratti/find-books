/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { paginationStep } from "../../lib/config";

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
      state.startIndex += paginationStep;
    },
    reset(state) {
      state.startIndex = 0;
    },
  },
});

export default paginationSlice.reducer;
export const { increment, reset } = paginationSlice.actions;
