import React from 'react';
import banner2 from '../../img/banner2.jpg';
import './Header.css';
const Header = () => {
    return (
        <div class="header">
            
           <img class="banner" src={banner2} alt=""/>
           <h1 className="title">SPORTS WORLD</h1>
        </div>
    );
};

export default Header;