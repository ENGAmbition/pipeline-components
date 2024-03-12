import { DetailedHTMLProps, ReactNode } from "react";

/**
 * HTML Card Props type definition
 */
export type HTMLElementProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export interface CardProps {
  title: string;
  content: string;
  icon: ReactNode;
  buttonText?: string;
}
export type HTMLCardProps = CardProps & HTMLElementProps;
