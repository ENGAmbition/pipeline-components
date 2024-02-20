import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLButtonProps } from "./Button.types";

/**
 * Button Component
 *
 * @param {HTMLButtonProps} props - Component props
 * @returns JSX.Element
 *
 * @example
 * <Button>Click me</Button>
 */
const Button: FC<HTMLButtonProps> = (props): JSX.Element => (
  <button
    {...props}
    className={cn(
      "w-34 h-12 px-6 py-3 bg-white rounded-lg border border-spruce-light text-spruce-default text-base font-jakarta font-md",
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
