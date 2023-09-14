"use client";

import { memo } from "react";
import { useAppSelector } from "@/store/types/hooks";
import BookCard from "@/components/entities/book-card/book-card";
import Styles from "./books-grid.module.css";

const BooksGrid = memo(() => {
  const foundBooks = useAppSelector((state) => state.searchSlice.foundBooks);
  // TODO переделать хардкод BookCard

  return (
    <ul className={Styles.cnt}>
      {foundBooks.map((item) => (
        <BookCard
          image={item.volumeInfo?.imageLinks?.smallThumbnail || ""}
          category={item.volumeInfo?.categories?.join("/") || ""}
          name={item.volumeInfo?.title}
          author={item.volumeInfo?.authors?.join(", ") || ""}
          key={item.id}
        />
      ))}
    </ul>
  );
});

export default BooksGrid;
