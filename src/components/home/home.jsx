import React from 'react';
import { Link } from "react-router-dom";
// import imgHome from './imgHome.png';
import './styles.css';

const Home = () => {
    return (
        <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
            <span></span>
            </label>
            <ul className="menu__box">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/todoApp'>TodoApp</Link></li>
                <li><Link to='/weather'>WeatherApp 🏗️</Link></li>
                <li><Link to='/emojis'>Pick @ emoji</Link></li>
            </ul>

            {/* <>
            <img src={imgHome} alt="imgHome"/>
            </> */}
                
        </div>
        
          
        
    );
}

export default Home;
