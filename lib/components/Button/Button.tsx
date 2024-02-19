import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLButtonProps } from "./Button.types";
// import { ButtonBase, ButtonProps } from "@mui/material";

/**
 * Button Component
 *
 * @returns JSX.Element
 */
const Button: FC<HTMLButtonProps> = (props): JSX.Element => (
  <button
    {...props}
    className={cn(
      "px-3 py-4 bg-white rounded-md border border-spruce-light text-16px text-spruce-default",
      props.className
    )}
  >
    {props.children}
  </button>
);

/**
 * Export the component by default
 */
export default Button;
