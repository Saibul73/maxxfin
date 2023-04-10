import React from "react";
import Header from "../../../components/user/header/Header";
import Landing from "../../../components/user/landing/Landing";
import Services from "../../../components/user/services/Services";
import Enquiry from "../../../components/user/enquiry/Enquiry";

function Home() {
  return (
    <div className="home-page">
      <div className="header-div">
        <Header />
      </div>
      <div className="landing-div">
        <Landing />
      </div>
      <div className="services-div" style={{ borderBottom: 'solid black 1px' }}>
        <Services />
      </div>
      {/* Skip TESTIMONIAL. */}
      <div className="enquiry-div">
        <Enquiry />
      </div>
    </div>
  );
}

export default Home;
