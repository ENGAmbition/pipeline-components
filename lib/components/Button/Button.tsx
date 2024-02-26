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
  const { variant, as, ...rest } = props;

  /**
   * Return the button with the outline
   */
  if (variant === "outlined") {
    const className = cn(
      "w-34 font-md h-12 rounded-lg border border-spruce-light bg-transparent px-6 py-3 font-jakarta text-base text-spruce-default duration-300 ease-in-out hover:bg-spruce-light/50 disabled:opacity-50",
      props.className,
    );

    return as === "link" ? (
      <a {...rest} className={className}>
        {props.children}
      </a>
    ) : (
      <button {...rest} className={className}>
        {props.children}
      </button>
    );
  }

  /**
   * Return the button with the blue gradient
   */
  const className = cn(
    "w-34 font-md h-12 rounded-lg bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 font-jakarta text-base text-white duration-300 ease-in-out hover:from-sky-500 hover:to-blue-600 disabled:opacity-50",
    props.className,
  );
  return as === "link" ? (
    <a {...rest} className={className}>
      {props.children}
    </a>
  ) : (
    <button {...rest} className={className}>
      {props.children}
    </button>
  );
};

/**
 * Export the component by default
 */
export default Button;
