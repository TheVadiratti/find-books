import { ReactNode, memo } from "react";
import Styles from "./search-input.module.css";

interface Props {
  children?: ReactNode;
  placeholder?: string;
  onChange: VoidFunction;
  extraClass?: string;
}

const SearchInput = memo(
  ({ children, placeholder, onChange, extraClass }: Props) => (
    <div className={`${Styles.cnt} ${extraClass}`} onChange={onChange}>
      <input className={Styles.input} type="text" placeholder={placeholder} />
      {children}
    </div>
  ),
);

export default SearchInput;
