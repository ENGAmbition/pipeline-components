import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLParaProps } from "./GradientText.types";

/**
 * GradientText Component
 *
 * @param {HTMLParaProps} props
 * @returns JSX.Element
 *
 * @example
 *
 * <GradientText>
 *  Content
 * </GradientText>
 */
const GradientText: FC<HTMLParaProps> = (props): JSX.Element => {
  /**
   * Return the component
   */
  return (
    <span
      {...props}
      className={cn(
        "bg-transparent bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent",
        props.className,
      )}
    >
      {props.children}
    </span>
  );
};

/**
 * Export the component by default
 */
export default GradientText;
