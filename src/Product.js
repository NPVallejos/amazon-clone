import React from 'react'
import './Product.css';

/* 
** 1. Title
** 2. Price
** 3. Rating
** 4. Image
** 5. Add to basket button
*/
function Product({ id, title, image, price, rating }) {
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
                        .map(() => (
                        <p>⭐</p>
                    ))}
                </div>
            
            </div>
            
            <img 
                src={image}
                alt=""
            /> 

            <button>Add to basket</button> 
        </div>
    )
}

export default Product
