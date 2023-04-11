import React from 'react';
import './services.scss';
import { MdVerified, MdAssignmentAdd, MdDashboardCustomize } from 'react-icons/md';
import { FaRupeeSign } from 'react-icons/fa';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';

function Services() {
    return (
        <div className='services container'>
            {/* SubTitle */}
            <div className="sub-title">
                <div className="title">
                    <h3>SERVICES.</h3>
                    <div className="shadow"></div>
                </div>
            </div>
            {/* Content */}
            <div className="content">
                {/* Map */}
                <div className="boader">
                    <div className="box">
                        <div className="icon-box">
                            <div className="icon" style={{ color: '#AE2EA1', backgroundColor: '#AE2EA11f' }}>
                                <MdVerified />
                            </div>
                        </div>
                        <div className="text">
                            <h5>Business <br></br>
                                Registration </h5>
                        </div>
                    </div>
                </div>
                <div className="boader">
                    <div className="box">
                        <div className="icon-box">
                            <div className="icon" style={{ color: '#369255', backgroundColor: '#3692551f' }}>
                                <FaRupeeSign />
                            </div>
                        </div>
                        <div className="text">
                            <h5>GST <br></br>
                                Services </h5>
                        </div>
                    </div>
                </div>
                <div className="boader">
                    <div className="box">
                        <div className="icon-box">
                            <div className="icon" style={{ color: '#93621A', backgroundColor: '#93621A1f' }}>
                                <MdAssignmentAdd />
                            </div>
                        </div>
                        <div className="text">
                            <h5>ITR Filing </h5>
                        </div>
                    </div>
                </div>
                <div className="boader">
                    <div className="box">
                        <div className="icon-box">
                            <div className="icon" style={{ color: '#2890B0', backgroundColor: '#2890B01f' }}>
                                <BsFillCreditCard2BackFill />
                            </div>
                        </div>
                        <div className="text">
                            <h5>ERP & Billing  <br></br>
                                Softwares</h5>
                        </div>
                    </div>
                </div>
                <div className="boader">
                    <div className="box">
                        <div className="icon-box">
                            <div className="icon" style={{ color: '#B81038', backgroundColor: '#B810381f' }}>
                                <MdDashboardCustomize />
                            </div>
                        </div>
                        <div className="text">
                            <h5>Other <br></br>
                                Services</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services