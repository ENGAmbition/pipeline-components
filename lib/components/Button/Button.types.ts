import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";

/**
 * HTML Button Props type definition
 */
export type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export type ButtonVariant = "outlined" | "blue-gradient";
export type ButtonAs = "button" | "link";

export type ButtonProps = HTMLButtonProps & {
  /**
   * The variant of the button
   */
  variant?: ButtonVariant;
  as?: ButtonAs;
};
