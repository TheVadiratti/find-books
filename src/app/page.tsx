"use client";

import BooksGrid from "@/components/widgets/books-grid/ui/books-grid";
import { useAppSelector } from "@/store/hooks";
import { PaginationButton } from "@/components/features";
import Loader from "@/components/shared/ui/loader/loader";
import Styles from "./page.module.css";

export default function Home() {
  const total = useAppSelector((state) => state.booksSlice.foundTotal);
  const status = useAppSelector((state) => state.searchSlice.status);
  const { isFetching, isSuccess, isError, error } = status;

  return (
    <main className={Styles.main}>
      {isError && <p style={{ color: "red" }}>{error}</p>}
      {(total || isSuccess) && <p>{`Found ${total} results`}</p>}
      <BooksGrid />
      {isFetching && <Loader />}
      {Boolean(total) && <PaginationButton />}
    </main>
  );
}
