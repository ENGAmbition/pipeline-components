import { JSX, FC } from "react";
import { HTMLSVGProps } from "./BrainIcon.types";
import { cn } from "../../../utils/cn";

/**
 * Brain Icon Component
 *
 * @param {HTMLSVGProps} props - Component props
 * @returns JSX.Element
 *
 * @example
 * <BrainIcon />
 */
const BrainIcon: FC<HTMLSVGProps> = (props): JSX.Element => (
  <svg
    className={cn("", props.className)}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    // Add the width, height, and viewBox attributes
    {...props}
  ></svg>
);

/**
 * Export the component by default
 */
export default BrainIcon;
