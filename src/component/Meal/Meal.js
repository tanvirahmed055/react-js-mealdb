import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb } = props.meal;
    return (
        <div>
            <div>
                <img src={strMealThumb} alt=""></img>
            </div>
            <div>
                <h3>Meal Name: {strMeal}</h3>
                <p><small>Meal id: {idMeal}</small></p>
                <p><small>Meal Category: {strCategory}</small></p>
                <p><small>Meal Area: {strArea}</small></p>
                <button onClick={() => props.handleAddToCart(strMeal)}>Add Meal</button>
            </div>

        </div>
    );
};

export default Meal;