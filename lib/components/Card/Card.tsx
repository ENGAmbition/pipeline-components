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
  <div className="card-container relative border border-solid border-gray-200 rounded-lg p-4 mt-40 mx-2 bg-gray-100 shadow-md" style={{height: "450px", width: "400px"}}>
    <div {...props} className="card flex flex-col justify-center items-center text-center mt-5 mx-4 my-2"> 
      <div className="card-icon-container">
        <img src={props.icon} alt="Icon" className="card-icon w-12 h-12 mt-3" />
      </div>
      <h2 className="card-title text-lg font-semibold mt-4">{props.title}</h2>
      <p className="card-content text-base text-gray-500 my-2 mb-5">{props.content}</p>
      {props.buttonText && (
        <button className="circle-button border-2 border-blue-200 rounded-full py-3 px-6 bg-gradient-to-r from-sky-400 to-blue-400 text-base font-semibold transition duration-300 hover:bg-blue-500 hover:text-white mt-10">
          {props.buttonText}
        </button>
      )}
    </div>
  </div>
);

export default Card;
