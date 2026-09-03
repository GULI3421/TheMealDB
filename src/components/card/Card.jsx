import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  return (
    <Link to={`/detail/${data.idMeal}`} className="meal-card">
      <div className="meal-image-container">
        <img src={data.strMealThumb} alt={data.strMeal} className="meal-image" />
      </div>
      <div className="meal-title-container">
        <h3 className="meal-title">{data.strMeal}</h3>
      </div>
    </Link>
  );
};

export default Card;