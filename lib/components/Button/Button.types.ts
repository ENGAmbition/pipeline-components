import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * HTML Button Props type definition
 */
export type HTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonVariant = "outlined" | "blue-gradient";

export type ButtonProps = HTMLButtonProps & {
  /**
   * The variant of the button
   */
  variant?: ButtonVariant;
};
