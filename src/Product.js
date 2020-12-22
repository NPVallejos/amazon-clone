// Use State hook 'useState' to manage product 'quantity'
import React, { useState } from 'react'
import './Product.css';
import ProductQuantity from './ProductQuantity';
import { useStateValue } from './StateProvider.js';

/* 
** 1. Title
** 2. Price
** 3. Rating
** 4. Image
** 5. Add to basket button
*/
function Product({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

    // Declare new state variable 'quantity'
    // Declare callback function 'setQuantity' to modify 'quantity'
    const [quantity, setQuantity] = useState(1);

    // console.log('this is the basket >>> ', basket);

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: quantity,
            },
        });
    };
    
    return (
        <div className='product'>
            <div className="product__info">
                
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            
            </div>
            
            <img 
                src={image}
                alt=""
            /> 
            
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} />

            <button onClick={addToBasket}>Add to basket</button> 
        </div>
    )
}

export default Product
