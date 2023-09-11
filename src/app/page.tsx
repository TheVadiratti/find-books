import BooksGrid from "@/components/widgets/books-grid/books-grid";
import Styles from "./page.module.css";

export default function Home() {
  return (
    <main className={Styles.main}>
      <p>Found 446 results</p>
      <BooksGrid />
    </main>
  );
}
