import { AppDispatch } from "@/store/store";
import {
  setFoundBooks,
  addMoreBooks,
  getBooksRequest,
  getBooksError,
  getBooksSuccess,
} from "../model/store/searchSlice";

const getBooks = (url: string) => async (dispatch: AppDispatch) => {
  dispatch(getBooksRequest());
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const { totalItems, items } = res;
      dispatch(setFoundBooks({ total: totalItems, items }));
      dispatch(getBooksSuccess());
    })
    .catch((err) => {
      dispatch(getBooksError(err));
    });
};

const getMoreBooks = (url: string) => async (dispatch: AppDispatch) => {
  dispatch(getBooksRequest());
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      dispatch(addMoreBooks(res.items));
      dispatch(getBooksSuccess());
    })
    .catch((err) => {
      dispatch(getBooksError(err));
    });
};

export { getBooks, getMoreBooks };
