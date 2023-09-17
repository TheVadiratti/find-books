/* eslint-disable import/prefer-default-export */
import { AppDispatch } from "@/store";
import { resetBooks, setFoundBooks } from "@/components/entities";
import {
  getBooksRequest,
  getBooksError,
  getBooksSuccess,
} from "../model/slice";
import { resetPagination } from "../../pagination/model/slice";

const getBooks = (url: string) => async (dispatch: AppDispatch) => {
  dispatch(getBooksRequest());
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const { totalItems, items } = res;
      dispatch(resetBooks());
      dispatch(resetPagination());
      dispatch(setFoundBooks({ total: totalItems, items }));
      dispatch(getBooksSuccess());
    })
    .catch((err) => {
      dispatch(getBooksError(err));
    });
};

export { getBooks };
