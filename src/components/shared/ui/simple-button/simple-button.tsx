import { memo, ButtonHTMLAttributes } from "react";
import Styles from "./simple-button.module.css";

interface Props {
  children: string;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: VoidFunction;
  disabled?: boolean;
  extraClass?: string;
}

const SimpleButton = memo(
  ({ children, type, onClick, disabled = false, extraClass }: Props) => (
    <button
      className={`${Styles.button} ${extraClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  ),
);

export default SimpleButton;
