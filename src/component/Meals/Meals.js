import React from 'react';
import { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);




    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])



    const handleAddToCart = (productname) => {
        const newCart = [...cart, productname];
        setCart(newCart);

    }


    // console.log(cart);
    return (
        <div>
            <h1>Meal Items</h1>

            <div className="mealdb-container">
                <div className="meals-container">
                    {
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meal>)
                    }
                </div>
                <div className="cart-area">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Meals;