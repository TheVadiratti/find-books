import { memo } from "react";
import Image from "next/image";
import Styles from "./book-card.module.css";

interface Props {
  image?: string;
  categories?: string[];
  name?: string;
  authors?: string[];
}

const BookCard = memo(
  ({ image = "", categories = [], name = "", authors = [] }: Props) => (
    <li className={Styles.card}>
      <div className={Styles.imageCnt}>
        <Image src={image} alt="book preview" fill objectFit="contain" />
      </div>
      <p className={Styles.category}>{categories[0] || ""}</p>
      <p className={Styles.name}>{name}</p>
      <p className={Styles.author}>{authors.join(", ") || ""}</p>
    </li>
  ),
);

export default BookCard;
