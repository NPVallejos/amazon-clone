import React from 'react'
import './Product.css';

/* 
** 1. Title
** 2. Price
** 3. Rating
** 4. Image
** 5. Add to basket button
*/
function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                
                <p> Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Mystic White (US Version) </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>169.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            
            </div>
            
            <img 
                src="https://m.media-amazon.com/images/I/313haaU8baL._AC_SY175_.jpg"
            /> 

            <button>Add to basket</button> 
        </div>
    )
}

export default Product
