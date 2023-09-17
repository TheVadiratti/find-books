/* eslint-disable import/prefer-default-export */
import { AppDispatch } from "@/store";
import { addMoreBooks } from "@/components/entities";
import {
  getBooksRequest,
  getBooksSuccess,
  getBooksError,
} from "../../search-books/model/slice";
import { incrementPagination } from "../model/slice";

const getMoreBooks = (url: string) => async (dispatch: AppDispatch) => {
  dispatch(incrementPagination());
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

export { getMoreBooks };
