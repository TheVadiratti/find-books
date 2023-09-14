"use client";

import { useFindBook } from "@/components/shared/hooks/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Styles from "./page.module.css";

export default function Book({ params }: { params: { book: string } }) {
  const router = useRouter();
  const book = useFindBook(params.book);
  const categories = book?.volumeInfo.categories || [];
  const name = book?.volumeInfo.title;
  const authors = book?.volumeInfo.authors || [];
  const description = book?.volumeInfo.description || "";

  if (!book) {
    router.push("/");
  }

  return (
    <main className={Styles.main}>
      {book?.volumeInfo.imageLinks?.thumbnail && (
        <div className={Styles.imageCnt}>
          <Image
            src={book?.volumeInfo.imageLinks?.thumbnail}
            fill
            objectFit="contain"
            alt="front-side book"
          />
        </div>
      )}
      <div>
        <p className={Styles.category}>{categories.join("/")}</p>
        <p className={Styles.name}>{name}</p>
        <p className={Styles.authors}>{authors.join(", ")}</p>
        <div className={Styles.descriptionCnt}>
          <p className={Styles.description}>{description}</p>
        </div>
      </div>
    </main>
  );
}
