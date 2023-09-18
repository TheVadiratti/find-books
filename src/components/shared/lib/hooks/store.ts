import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ChangeEventHandler } from "react";

const useInputControl = (action: any) => {
  const dispatch = useAppDispatch();

  const handler: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (
    e,
  ) => {
    dispatch(action(e.target.value));
  };

  return handler;
};

const useFindBook = (id: string) => {
  const foundBooks = useAppSelector((state) => state.booksSlice.foundBooks);
  return foundBooks.find((item) => item.id === id);
};

export { useInputControl, useFindBook };
