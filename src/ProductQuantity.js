import React from 'react';
import './ProductQuantity.css';

function ProductQuantity({ quantity, setQuantity }) {
    return (
        <div class="product__dropdown">
                <button>Qty: {quantity}</button>
                <div class="product__dropdownContent">
                    {Array(3)
                        .fill()
                        .map((_, i) => (
                        <button onClick={() => setQuantity(i+1)}>{i+1}</button>
                    ))}
                </div>
        </div>
    )
}

export default ProductQuantity
