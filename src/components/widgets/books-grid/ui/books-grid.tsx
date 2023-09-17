"use client";

import { memo } from "react";
import { useAppSelector } from "@/store/hooks";
import { BookCard } from "@/components/entities";
import Styles from "./books-grid.module.css";

const BooksGrid = memo(() => {
  const foundBooks = useAppSelector((state) => state.booksSlice.foundBooks);

  return (
    <ul className={Styles.cnt}>
      {foundBooks &&
        foundBooks.map((item) => (
          <BookCard
            image={item.volumeInfo.imageLinks?.smallThumbnail}
            categories={item.volumeInfo.categories}
            name={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            id={item.id}
            key={item.id}
          />
        ))}
    </ul>
  );
});

export default BooksGrid;
