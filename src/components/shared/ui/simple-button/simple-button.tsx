import { memo, ButtonHTMLAttributes } from "react";
import Styles from "./simple-button.module.css";

interface Props {
  children: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: VoidFunction;
  extraClass?: string;
}

const SimpleButton = memo(({ children, type, onClick, extraClass }: Props) => (
  <button
    className={`${Styles.button} ${extraClass}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
));

export default SimpleButton;
