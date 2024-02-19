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
      "w-34 h-12 px-6 py-3 bg-white rounded-lg border border-spruce-light text-spruce-default text-base font-buttonFont font-semibold",
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
