import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { ButtonProps } from "./Button.types";

/**
 * Button Component
 *
 * @param {ButtonProps} props - Component props
 * @returns JSX.Element
 *
 * @example
 * <Button>Click me</Button>
 */
const Button: FC<ButtonProps> = (props): JSX.Element => {
  /**
   * Remove the variant prop from the props object
   */
  const { variant, ...rest } = props;

  /**
   * Return the button with the outline
   */
  if (variant === "outlined") {
    return (
      <button
        {...rest}
        className={cn(
          "w-34 h-12 px-6 py-3 bg-transparent rounded-lg border border-spruce-light text-spruce-default text-base font-jakarta font-md hover:bg-spruce-light/50 duration-300 ease-in-out",
          props.className
        )}
      >
        {props.children}
      </button>
    );
  }

  /**
   * Return the button with the blue gradient
   */
  return (
    <button
      {...rest}
      className={cn(
        "w-34 h-12 px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg text-white text-base font-jakarta font-md hover:from-sky-500 hover:to-blue-600 duration-300 ease-in-out",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};

/**
 * Export the component by default
 */
export default Button;
