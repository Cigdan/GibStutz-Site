import React from 'react';
import Logo from "../images/gibstutztransparent.png"
import { HiBars3BottomRight } from "react-icons/hi2";

function Header() {
    return (  
        <header className='bg-gs-100 bg-opacity-75 flex justify-between items-center fixed py-2 px-0 left-0 right-0 z-10'>
            <div className='Logo'>
                <img src={Logo} alt='Gibstutz Logo' className='h-16 ml-6'></img>
            </div>
            <nav className='mr-6 text-white hidden md:block'>
                <button className='btn btn-ghost text-lg font-bold mx-5'>Home</button>
                <button className='btn btn-ghost text-lg font-bold mx-5'>About us</button>
                <button className='btn btn-ghost text-lg font-bold mx-5'>Schliere</button>
                <button className='btn btn-ghost text-lg font-bold mx-5'>Game</button>
            </nav>
            <nav className='md:hidden sm:visible mr-6'>
                <HiBars3BottomRight className='w-full h-10' />
            </nav>
        </header>
    );
}

export default Header;