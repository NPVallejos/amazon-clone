import React, { useState } from 'react';
import './CheckoutProduct.css';
import ProductQuantity from './ProductQuantity';
import { useStateValue } from './StateProvider.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function CheckoutProduct({ id, image, title, price, rating, quantity }) {
    const [{ basket }, dispatch] = useStateValue();

    // Declare new state variable 'quantity'
    // Declare callback function 'setQuantity' to modify 'quantity'
    const [quantityState, setQuantity] = useState(quantity);
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };
    
    const changeQuantityInBasket = (newQuantityValue) => {
        dispatch({
            type: 'MODIFY_QUANTITY',
            id: id,
            quantity: quantityState,
        });
        setQuantity(newQuantityValue);
    }

    return (
        <div className="checkoutProduct">
            <div className='checkoutProduct__imageContainer'>
                <img src={image} alt="" className='checkoutProduct__image' />
            </div>

            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) =>
                            <p>⭐</p>
                        )
                    }
                </div>
                <ProductQuantity quantity={quantityState} setQuantity={changeQuantityInBasket} />
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct;
