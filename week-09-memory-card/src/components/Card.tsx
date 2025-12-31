import React from "react";
import "../App.css";

export function Card({ image, title, onClick }) {
  return (
    <div className='game-card' onClick={onClick}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}
