import { memo } from "react";
import SimpleButton from "@/components/shared/ui/simple-button/simple-button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { composeUrl } from "../../search-books/lib/helpers/url";
import { BASE_URL } from "../../search-books/config/url";
import { getMoreBooks } from "../api/add-books";
import { incrementPagination } from "../model/slice";

const PaginationButton = memo(() => {
  const dispatch = useAppDispatch();
  const inputs = useAppSelector((state) => state.searchSlice.inputs);
  const startIndex = useAppSelector(
    (state) => state.paginationSlice.startIndex,
  );
  const step = useAppSelector((state) => state.paginationSlice.step);

  const paginationHandler = () => {
    dispatch(incrementPagination());
    const params = { ...inputs, startIndex, step };
    const url = composeUrl(BASE_URL, params);
    dispatch(getMoreBooks(url));
  };

  return (
    <SimpleButton type="button" onClick={paginationHandler}>
      Load more
    </SimpleButton>
  );
});

export default PaginationButton;
