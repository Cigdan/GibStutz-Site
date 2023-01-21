import React from 'react';
import "./header.css"
import Logo from "../images/gibstutztransparent.png"
function Header() {
    return (  
        <header>
            <div className='Logo'>
                <img src={Logo} alt='Gibstutz Logo' height="100px"></img>
            </div>
            <nav>
                <ul className='navList'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Schliere</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;