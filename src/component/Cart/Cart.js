import React from 'react';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;

    return (
        <div>
            <h1>Added Meal Quantity: {cart.length}</h1>
            {
                cart.map(item => <li>{item}</li>)
            }
        </div>
    );
};

export default Cart;