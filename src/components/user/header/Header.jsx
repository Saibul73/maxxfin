import React, { useState } from 'react'
import './header.scss'
import { RiMenu3Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuShow, setMenuShow] = useState(false)
    return (
        <div className='header'>
            <div className="header-left">
                <div className="logo">
                    {/* <img src="" alt="" /> */}
                    MAXXFIN
                </div>
                <div className="menu-button">
                    <div className='menu-icon' onClick={() => setMenuShow((state) => !state)}><RiMenu3Fill /></div>
                </div>
            </div>
            <div className={menuShow ? "header-right show-menu-item" : "header-right"}>
                <div className="menu-items">
                    <ul>
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Services</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Contact us</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header