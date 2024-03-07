import { cn } from "../../lib/utils/cn";
import { JSX, FC } from "react";
import { HTMLCardProps } from "./Card.types";

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
<div className='flex-wrap grid grid-cols-3 gap-x-2 gap-y-3'>
    <div {...props} className="card-container">
      <div className="card w-400 h-400 border border-solid border-gray-200 rounded-lg shadow-md bg-gray-100 flex flex-col justify-center items-center text-center p-20 m-10">
        <div className="card-icon-container">
          <img src={props.icon} alt="Icon" className="card-icon w-20 h-20" />
        </div>
        <h2 className="card-title text-lg font-semibold mt-8">{props.title}</h2>
        <p className="card-content text-base text-gray-500 mb-12">{props.content}</p>
        {props.buttonText && (
          <button className="circle-button border-2 border-blue-200 rounded-full py-3 px-6 bg-gradient-to-r from-sky-400 to-blue-400 text-black text-base font-semibold transition duration-300 hover:bg-blue-500 hover:text-white">
            {props.buttonText}
          </button>
        )}
      </div>
    </div>
  </div>
);

export default Card;
