import React from 'react'
import './Header.css';

/*
** This component is the navbar for the website
** It will include three sections:
**    1. Logo image (Amazon)
**    2. Search bar (input with search button)
**    3. Options buttons (sign in, Returns & orders, Your Prime, shopping cart)
*/
function Header() {
    return (
        <div className='header'>
            <img 
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                {/* Logo */}
            </div>

            <div className="header__nav">
                <div className='header__option'>
                    Sign in button
                </div>

                <div className='header__option'>
                    Returns and Orders
                </div>
                
                <div className='header__option'>
                    Your Prime
                </div>
                
                <div className='header__option'>
                    Shopping Cart
                </div>
            </div>
        </div>
    )
}

export default Header
