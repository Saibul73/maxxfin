import React from 'react'
import './landing.scss'
import Image from '../../../assets/images/image1.png'
import { IoIosArrowForward } from 'react-icons/io';

function Landing() {
    return (
        <div className='landing container'>
            <div className="boader">
                <div className="left">
                    <h1>Partnering for <br></br>
                        Your Progress.</h1>
                    <p>India’s largest tax and<br></br>
                        financial services software platform</p>
                    <button className='btn-blue'>Contact Us <span><IoIosArrowForward /></span></button>
                </div>
                <div className="right">
                    <img src={Image} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Landing