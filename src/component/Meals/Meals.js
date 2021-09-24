import React from 'react';
import { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div>
            <h1>Meal Items</h1>
            {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;