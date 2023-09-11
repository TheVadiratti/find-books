import { memo } from "react";
import Image, { StaticImageData } from "next/image";
import Styles from "./book-card.module.css";

interface Props {
  image: StaticImageData;
}

const BookCard = memo(({ image }: Props) => (
  <li className={Styles.card}>
    <div className={Styles.imageCnt}>
      <Image src={image} alt="book preview" fill objectFit="contain" />
    </div>
    <p className={Styles.category}>Computers</p>
    <p className={Styles.name}>Node.js Путеводитель по технологии</p>
    <p className={Styles.author}>Кирилл Сухов</p>
  </li>
));

export default BookCard;
