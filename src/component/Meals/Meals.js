import React from 'react';
import { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchBoxText, setSearchBoxText] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState([]);




    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals)
                setShowSearchResult(data.meals);
            })
    }, [])



    const handleAddToCart = (productname) => {
        const newCart = [...cart, productname];
        setCart(newCart);

    }

    const handleSearchText = (event) => {
        const searchText = event.target.value;
        setSearchBoxText(searchText);

    }
    // console.log(showSearchResult);

    useEffect(() => {
        // console.log(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBoxText}`);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBoxText}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setShowSearchResult(data.meals))
    }, [searchBoxText])

    // console.log(cart);
    return (
        <div>
            <div className="search-container">
                <input type="text" onChange={handleSearchText} placeholder="type here" />
            </div>
            <div className="mealdb-container">
                <div className="meals-container">
                    {
                        showSearchResult.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meal>)
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