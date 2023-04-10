import React from 'react'
import './enquiry.scss'
import Image from '../../../assets/images/enquriy.jpg'

function Enquiry() {
    return (
        <div className='enquiry'>
            <div className="container">

                {/* SubTitle */}
                <div className="sub-title">
                    <div className="title">
                        <h3>ENQUIRY.</h3>
                        <div className="shadow"></div>
                    </div>
                </div>
                {/* Content */}
                <div className="content">
                    <div className="left">
                        <img src={Image} alt="" />
                    </div>
                    <div className="right">
                        <div className="form-div">
                            <form action="">
                                <div className="input-div">
                                    <input type="text" name='fullname' id='fullname' required/>
                                    <label htmlFor="fullname">Full name.</label>
                                </div>
                                <div className="input-div">
                                    <input type="email" name='email' id='email' required/>
                                    <label htmlFor="email">Email address.</label>
                                </div>
                                <div className="input-div">
                                    <input type="number" name='mobile' id='mobile' required/>
                                    <label htmlFor="mobile">Mobile.</label>
                                </div>
                                <div className="input-div">
                                    <textarea name="message" id="message" cols="30" rows="5" required></textarea>
                                    <label htmlFor="message">Message.</label>
                                </div>
                                <div className="button-div">
                                    <button className='btn-blue'>Submit.</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enquiry