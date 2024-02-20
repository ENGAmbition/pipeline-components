import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLGradientTextProps } from "./GradientText.types";

/**
 * GradientText Component
 *
 * @param {HTMLGradientTextProps} props - Component props
 * @returns JSX.Element
 *
 * @example
 *
 * // Gradient from red to blue to the right
 * <GradientText from="red" to="blue" direction="to-r">
 */
const GradientText: FC<HTMLGradientTextProps> = (props): JSX.Element => (
  <span
    {...props}
    className={cn(
      "bg-transparent bg-clip-text text-transparent",
      `from-${props.from}`,
      `to-${props.to}`,
      `bg-gradient-${props.direction}`,
      props.className
    )}
  >
    {props.children}
  </span>
);

/**
 * Export the component by default
 */
export default GradientText;
