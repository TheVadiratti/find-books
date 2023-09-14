"use client";

import BooksGrid from "@/components/widgets/books-grid/books-grid";
import { useAppSelector } from "@/store/types/hooks";
import { PaginationButton } from "@/components/features/pagination";
import Styles from "./page.module.css";

export default function Home() {
  const total = useAppSelector((state) => state.searchSlice.foundTotal);
  const isSearchSuccess = useAppSelector(
    (state) => state.searchSlice.status.isSuccess,
  );

  return (
    <main className={Styles.main}>
      {(total || isSearchSuccess) && <p>{`Found ${total} results`}</p>}
      <BooksGrid />
      {isSearchSuccess && <PaginationButton />}
    </main>
  );
}
