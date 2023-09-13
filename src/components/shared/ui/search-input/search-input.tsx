import { ReactNode, memo, ChangeEventHandler } from "react";
import Styles from "./search-input.module.css";

interface Props {
  children?: ReactNode;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  extraClass?: string;
}

const SearchInput = memo(
  ({ children, placeholder, onChange, value, extraClass }: Props) => (
    <div className={`${Styles.cnt} ${extraClass}`}>
      <input
        className={Styles.input}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {children}
    </div>
  ),
);

export default SearchInput;
