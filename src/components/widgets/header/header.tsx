import { memo } from "react";
import SearchBooks from "@/components/features/search-books/search-books";
import Styles from "./header.module.css";

const Header = memo(() => (
  <header className={Styles.header}>
    <h1 className={Styles.heading}>Search for books</h1>
    <SearchBooks />
  </header>
));

export default Header;
