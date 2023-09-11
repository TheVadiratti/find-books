"use client";

import { memo, useState } from "react";
import SearchInput from "@/components/shared/ui/search-input/search-input";
import SimpleButton from "@/components/shared/ui/simple-button/simple-button";
import SimpleSelect from "@/components/shared/ui/simple-select/simple-select";
import { categories, sortingBy } from "./constants/select";
import Styles from "./search-books.module.css";

const SearchBooks = memo(() => {
  const [state, setState] = useState(true);

  return (
    <form className={Styles.form}>
      <SearchInput
        onChange={() => {}}
        placeholder="Введите название"
        extraClass={Styles.searchInput}
      >
        <SimpleButton type="submit" onClick={() => {}}>
          Поиск
        </SimpleButton>
      </SearchInput>
      <div className={Styles.filters}>
        <div className={Styles.filter}>
          <p className={Styles.filterName}>Categories</p>
          <SimpleSelect options={categories} />
        </div>
        <div className={Styles.filter}>
          <p className={Styles.filterName}>Sorting by</p>
          <SimpleSelect options={sortingBy} />
        </div>
      </div>
    </form>
  );
});

export default SearchBooks;
