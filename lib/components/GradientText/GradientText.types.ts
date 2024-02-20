import { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * Component props definitions
 */
export type HTMLParaProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type Direction =
  | "to-t" // To top
  | "to-tr" // To top right
  | "to-r" // To right
  | "to-br" // To bottom right
  | "to-b" // To bottom
  | "to-bl" // To bottom left
  | "to-l" // To left
  | "to-tl"; // To top left

export type HTMLGradientTextProps = HTMLParaProps & {
  from: string;
  to: string;
  direction: Direction;
};
