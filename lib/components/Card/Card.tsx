import { JSX, FC } from "react";
import { HTMLCardProps } from "./Card.types";
import Button from "../Button";

/**
 * Card Component
 *
 * @param {HTMLCardProps} props - Component props
 * @returns JSX.Element
 *
 * @example
 * <Card
 *  title="Card Title"
 *  content="Card Content"
 *  icon="https://via.placeholder.com/150"
 *  buttonText="Click Me"
 * />
 */

const Card: FC<HTMLCardProps> = (props): JSX.Element => (
  <div
    className="relative flex flex-col items-center justify-start gap-5 rounded-lg border border-solid border-gray-200 bg-gray-100 px-7 py-10 text-center shadow-md"
    style={{ height: "450px", width: "400px" }}
  >
    {props.icon}

    <div className="flex flex-col gap-1">
      <h2 className="text-lg font-semibold">{props.title}</h2>
      <p className="text-base text-gray-500">{props.content}</p>
    </div>

    {props.buttonText && (
      <Button
        variant="blue-gradient"
        className="rounded-full border-2 border-blue-200 text-sm"
      >
        {props.buttonText}
      </Button>
    )}
  </div>
);

export default Card;
