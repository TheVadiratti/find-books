import { memo } from "react";
import Styles from "./simple-select.module.css";

interface Props {
  options: string[];
  extraClass?: string;
}

const SimpleSelect = memo(({ options, extraClass }: Props) => (
  <select className={`${Styles.select} ${extraClass}`}>
    {options.map((item) => (
      <option value={item.toLowerCase()}>{item}</option>
    ))}
  </select>
));

export default SimpleSelect;
