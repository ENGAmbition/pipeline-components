// Card.tsx

import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  content: string;
  buttonText?: string;
  icon: string; 
}

const Card: React.FC<CardProps> = ({ title, content, buttonText, icon }) => {
  return (
    <div className="card">
      <div className="card-icon-container">
        <img src={icon} alt="Icon" className="card-icon" />
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      {buttonText && <button className="circle-button">{buttonText}</button>}
    </div>
  );
};

export default Card;
