import type { FC } from "react";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ className, children, ...otherProps }) => (
  <button className={className} data-testid='CompRoot' {...otherProps}>
    {children}
  </button>
);

export default Button;
