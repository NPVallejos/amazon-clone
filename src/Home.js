import React from 'react'
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        id="12321341"
                        title='Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Mystic White (US Version)'
                        image='https://m.media-amazon.com/images/I/313haaU8baL._AC_SY175_.jpg'
                        price={169.99}
                        rating={5}
                    />
                    <Product 
                        id="12321342"
                        title='AOC 27E1H 27" Full HD 1920x1080 Monitor, IPS Panel, 5ms, FlickerFree, HDMI/VGA, VESA Compatible, EPEAT Silver, EnergyStar'
                        image='https://m.media-amazon.com/images/I/51xjAVRyIUL._AC_SY175_.jpg'
                        price={175.04}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="12321343"
                        title='Logitech G Gaming Driving Force Shifter – Compatible with G29 and G920 Driving Force Racing Wheels for Playstation 4, Xbox One, and PC'
                        image='https://images-na.ssl-images-amazon.com/images/I/51D3-2lQu7L._AC_SL1024_.jpg'
                        price={59.99}
                        rating={4}
                    />
                    <Product 
                        id="12321344"
                        title='Bounty Quick-Size Paper Towels, White, 12 Family Rolls = 30 Regular Rolls'
                        image='https://images-na.ssl-images-amazon.com/images/I/81iGU6UvExL._AC_SL1500_.jpg'
                        price={30.44}
                        rating={5}
                    />
                    <Product 
                        id="12321345"
                        title='Samsung Galaxy Buds Live, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Mystic White (US Version)'
                        image='https://m.media-amazon.com/images/I/513Rk1vlcBL._AC_SY200_.jpg'
                        price={35.94}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="12321346"
                        title='CubiCubi Computer Desk 47 inch with Storage Shelves Study Writing Table for Home Office,Modern Simple Style, Rustic Brown'
                        image='https://m.media-amazon.com/images/I/71OKYpPW-DL._AC_UL320_.jpg'
                        price={109.99}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
