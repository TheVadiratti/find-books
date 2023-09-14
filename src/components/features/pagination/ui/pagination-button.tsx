import { memo } from "react";
import SimpleButton from "@/components/shared/ui/simple-button/simple-button";
import { useAppDispatch, useAppSelector } from "@/store/types/hooks";
import { increment } from "../model/store/paginationSlice";
import { composeUrl } from "../../search-books/lib/helpers/url";
import { BASE_URL } from "../../search-books/lib/constants/url";
import { getMoreBooks } from "../../search-books";

const PaginationButton = memo(() => {
  const dispatch = useAppDispatch();
  const inputs = useAppSelector((state) => state.searchSlice.inputs);
  const startIndex = useAppSelector(
    (state) => state.paginationSlice.startIndex,
  );

  const paginationHandler = () => {
    dispatch(increment());

    const params = { ...inputs, startIndex };
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
