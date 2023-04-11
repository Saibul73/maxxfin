import React, { useState } from 'react'
import './header.scss'
import { RiMenu3Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuShow, setMenuShow] = useState(false)
    return (
        <header className='header'>
            <div className="header-left">
                <div className="logo">
                    <h1 className='logo-header'>MAXXFIN<span>.</span></h1>
                </div>
                <div className="menu-button">
                    <div className='menu-icon' onClick={() => setMenuShow((state) => !state)}><RiMenu3Fill /></div>
                </div>
            </div>
            <div className={menuShow ? "header-right show-menu-item" : "header-right"}>
                <div className="menu-items">
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/d'>Services</NavLink></li>
                        <li><NavLink to='/d'>About</NavLink></li>
                        <li><NavLink to='/d'>Contact us</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header