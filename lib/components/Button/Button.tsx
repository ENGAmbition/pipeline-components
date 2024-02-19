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
      "w-[134px] h-[48px] px-[24px] py-[14px] bg-white rounded-[12px] border-[1px] border-spruce-light text-16px text-spruce-default",
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
