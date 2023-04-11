import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
import { IoLocationSharp,IoMail } from 'react-icons/io5';
import { BsTelephoneFill,BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
    const [date] = useState(new Date().getFullYear())
    return (
        <footer className='footer'>
            <div className="line-div"></div>
            <div className="container top">
                <div className="left">
                    <h1 className="logo-header">MAXXFIN<span>.</span></h1>
                    <p>India’s largest tax and <br></br>
                        financial services software platform</p>
                </div>
                <div className="right">
                    <ul>
                        <li className='title'>Services</li>
                        <li><NavLink>Business registration</NavLink></li>
                        <li><NavLink>GST services</NavLink></li>
                        <li><NavLink>ITR Filing</NavLink></li>
                        <li><NavLink>ERP & Billing Softwares</NavLink></li>
                        <li><NavLink>Other services</NavLink></li>
                    </ul>
                    <ul>
                        <li className='title'>Contact Us</li>
                        <li><NavLink><span><IoLocationSharp /></span> Address</NavLink></li>
                        <li><NavLink><span><IoMail /></span> Email</NavLink></li>
                        <li><NavLink><span><BsTelephoneFill /></span> Mobile</NavLink></li>
                        <li><NavLink><span><AiFillInstagram /></span> Instagram</NavLink></li>
                        <li><NavLink><span><BsFacebook /></span> Facebook</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="bottom container">
                <div className="left">
                    <p>Copyright © {date} Maxxfin. All Rights Reserved</p>
                </div>
                <div className="right">
                    <p>Powered by | MAXXFIN.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer