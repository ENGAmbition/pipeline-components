import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLCardProps } from "./Card.types";
import "./card.css";

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
  <div {...props} className={cn("card", props.className)}>
    {/** ^^^ Only use cn(...) for the top level div */}

    <div className="card-icon-container">
      <img src={props.icon} alt="Icon" className="card-icon" />
    </div>

    <h2 className="card-title">{props.title}</h2>
    <p className="card-content">{props.content}</p>

    {props.buttonText && (
      <button className="circle-button">{props.buttonText}</button>
    )}
  </div>
);

/**
 * Export the component by default
 */
export default Card;
