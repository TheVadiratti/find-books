import { memo } from "react";
import { SearchForm } from "@/components/features";
import Styles from "./header.module.css";

const Header = memo(() => (
  <header className={Styles.header}>
    <h1 className={Styles.heading}>Search for books</h1>
    <SearchForm />
  </header>
));

export default Header;
