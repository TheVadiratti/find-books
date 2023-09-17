/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { paginationStep } from "../config/pagination";

interface InitialState {
  startIndex: number;
  step: number;
}

const initialState: InitialState = {
  startIndex: 10,
  step: paginationStep,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incrementPagination(state) {
      state.startIndex += state.step;
      state.step = paginationStep;
    },
    resetPagination(state) {
      state.startIndex = initialState.startIndex;
      state.step = initialState.step;
    },
  },
});

export default paginationSlice.reducer;
export const { incrementPagination, resetPagination } = paginationSlice.actions;
