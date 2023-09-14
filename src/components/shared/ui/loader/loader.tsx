import { memo } from "react";
import Styles from "./loader.module.css";

const Loader = memo(() => <p className={Styles.loader}>Загрузка...</p>);

export default Loader;
