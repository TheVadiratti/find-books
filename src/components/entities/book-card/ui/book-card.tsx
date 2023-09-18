import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./book-card.module.css";

interface Props {
  id: string;
  image?: string;
  categories?: string[];
  name?: string;
  authors?: string[];
}

const BookCard = memo(
  ({ id, image = "", categories = [], name = "", authors = [] }: Props) => (
    <li className={Styles.card}>
      <Link className={Styles.link} href={`/${id}`}>
        <div className={Styles.imageCnt}>
          <Image
            className={Styles.image}
            src={image}
            alt="book preview"
            fill
            sizes="100%"
          />
        </div>
        <p className={Styles.category}>{categories[0] || ""}</p>
        <p className={Styles.name}>{name}</p>
        <p className={Styles.author}>{authors.join(", ") || ""}</p>
      </Link>
    </li>
  ),
);

export default BookCard;
