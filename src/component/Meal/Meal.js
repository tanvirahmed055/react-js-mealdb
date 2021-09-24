import React from 'react';

const Meal = (props) => {
    const { idMeal, strMeal, strCategory, strArea } = props.meal;
    return (
        <div>

            <h3>Meal Name: {strMeal}</h3>
            <p><small>Meal id: {idMeal}</small></p>
            <p><small>Meal Category: {strCategory}</small></p>
            <p><small>Meal Area: {strArea}</small></p>

        </div>
    );
};

export default Meal;