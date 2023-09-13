import { memo } from "react";
import Image from "next/image";
import Styles from "./book-card.module.css";

interface Props {
  image: string;
  category: string;
  name: string;
  author: string;
}

const BookCard = memo(({ image, category, name, author }: Props) => (
  <li className={Styles.card}>
    <div className={Styles.imageCnt}>
      <Image src={image} alt="book preview" fill objectFit="contain" />
    </div>
    <p className={Styles.category}>{category}</p>
    <p className={Styles.name}>{name}</p>
    <p className={Styles.author}>{author}</p>
  </li>
));

export default BookCard;
