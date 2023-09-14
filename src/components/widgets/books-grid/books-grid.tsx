"use client";

import { memo } from "react";
import { useAppSelector } from "@/store/types/hooks";
import BookCard from "@/components/entities/book-card/book-card";
import Styles from "./books-grid.module.css";

const BooksGrid = memo(() => {
  const foundBooks = useAppSelector((state) => state.searchSlice.foundBooks);

  return (
    <ul className={Styles.cnt}>
      {foundBooks.map((item) => (
        <BookCard
          image={item.volumeInfo.imageLinks?.smallThumbnail}
          categories={item.volumeInfo.categories}
          name={item.volumeInfo.title}
          authors={item.volumeInfo.authors}
          key={item.id}
        />
      ))}
    </ul>
  );
});

export default BooksGrid;
