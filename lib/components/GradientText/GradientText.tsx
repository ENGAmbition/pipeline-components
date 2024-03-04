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
const GradientText: FC<HTMLGradientTextProps> = (props): JSX.Element => {
  /**
   * Default props
   */
  if (!props.from) props.from = "sky-500";
  if (!props.to) props.to = "blue-500";
  if (!props.direction) props.direction = "to-r";

  /**
   * Return the component
   */
  return (
    <span
      {...props}
      className={cn(
        "bg-transparent bg-clip-text text-transparent",
        `from-${props.from}`,
        `to-${props.to}`,
        `bg-gradient-${props.direction}`,
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
