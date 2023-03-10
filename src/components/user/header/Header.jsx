import React from 'react'
import './header.scss'
import { RiMenu3Fill } from 'react-icons/ri';

function Header() {
  return (
    <div className='header'>
        <div className="header-left">
            <div className="logo">
                {/* <img src="" alt="" /> */}
                MAXXFIN
            </div>
        </div>
        <div className="header-right">
            <div className="menu-button">
                <button><RiMenu3Fill/></button>
            </div>
            <div className="menu-items">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header