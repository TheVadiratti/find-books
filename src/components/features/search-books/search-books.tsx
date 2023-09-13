import { memo, FormEventHandler, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/types/hooks";
import SearchInput from "@/components/shared/ui/search-input/search-input";
import SimpleButton from "@/components/shared/ui/simple-button/simple-button";
import SimpleSelect from "@/components/shared/ui/simple-select/simple-select";
import getBooks from "./api/get-books";
import {
  enterSearchInput,
  changeCategoryFilter,
  changeSortingByFilter,
} from "./store/searchSlice";
import { CATEGORIES, SORTING_BY } from "./constants/select";
import Styles from "./search-books.module.css";
import { composeUrl } from "./helpers/url";
import { BASE_URL } from "./constants/url";
import useInputControl from "../../shared/hooks/store";

const SearchBooks = memo(() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeCategoryFilter(CATEGORIES[0]));
    dispatch(changeSortingByFilter(SORTING_BY[0]));
  }, []);
  const inputs = useAppSelector((state) => state.searchSlice.inputs);
  const searchInputHandler = useInputControl(enterSearchInput);
  const categorySelectHandler = useInputControl(changeCategoryFilter);
  const sortingSelectHandler = useInputControl(changeSortingByFilter);

  const { search, category, sortingBy } = inputs;
  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const url = composeUrl(BASE_URL, inputs);
    dispatch(getBooks(url));
  };

  return (
    <form className={Styles.form} onSubmit={submitForm}>
      <SearchInput
        placeholder="Введите название"
        onChange={searchInputHandler}
        value={search}
        extraClass={Styles.searchInput}
      >
        <SimpleButton type="submit">Поиск</SimpleButton>
      </SearchInput>
      <div className={Styles.filters}>
        <div className={Styles.filter}>
          <p className={Styles.filterName}>Categories</p>
          <SimpleSelect
            value={category}
            onChange={categorySelectHandler}
            options={CATEGORIES}
          />
        </div>
        <div className={Styles.filter}>
          <p className={Styles.filterName}>Sorting by</p>
          <SimpleSelect
            value={sortingBy}
            onChange={sortingSelectHandler}
            options={SORTING_BY}
          />
        </div>
      </div>
    </form>
  );
});

export default SearchBooks;
