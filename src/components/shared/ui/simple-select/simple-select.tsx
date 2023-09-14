import { memo, ChangeEventHandler } from "react";
import Styles from "./simple-select.module.css";

interface Props {
  options: string[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  extraClass?: string;
}

const SimpleSelect = memo(({ options, value, onChange, extraClass }: Props) => (
  <select
    className={`${Styles.select} ${extraClass}`}
    value={value}
    onChange={onChange}
  >
    {options.map((item) => (
      <option value={item.toLowerCase()} key={item}>
        {item}
      </option>
    ))}
  </select>
));

export default SimpleSelect;
