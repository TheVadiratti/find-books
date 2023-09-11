import { ReactNode, memo } from "react";
import Styles from "./search-input.module.css";

interface Props {
  children?: ReactNode;
  onChange: VoidFunction;
  extraClass?: string;
}

const SearchInput = memo(({ children, onChange, extraClass }: Props) => (
  <div className={`${Styles.cnt} ${extraClass}`} onChange={onChange}>
    <input type="text" placeholder="Введите название" />
    {children}
  </div>
));

export default SearchInput;
