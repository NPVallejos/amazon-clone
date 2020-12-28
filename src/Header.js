import React from 'react'
import './Header.css';

// material-ui imports
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider.js';
import { auth } from './firebase';

/*
** This component is the navbar for the website
** It will include three sections:
**    1. Logo image (Amazon)
**    2. Search bar (input with search button)
**    3. Options buttons (sign in, Returns & orders, Your Prime, shopping cart)
*/
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    
    return (
        <div className='header'>
            <Link to='/'>
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>{user ? `Hello ${ user?.email.substring(0, user.email.indexOf('@')) }` : 'Hello Guest'}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>                    
                </div>
                
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
