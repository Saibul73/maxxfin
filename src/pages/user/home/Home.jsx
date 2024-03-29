import React from "react";
import Header from "../../../components/user/header/Header";
import Landing from "../../../components/user/landing/Landing";
import Services from "../../../components/user/services/Services";
import Enquiry from "../../../components/user/enquiry/Enquiry";
import Footer from "../../../components/user/footer/Footer";
import Testimonial from "../../../components/user/testimonial/Testimonial";

function Home() {
  return (
    <div className="home-page">
      <div className="header-div">
        <Header />
      </div>
      <div className="landing-div">
        <Landing />
      </div>
      <div className="services-div">
        <Services />
      </div>
      {/* Skip TESTIMONIAL. */}
      <div className="testimonial-div">
        <Testimonial />
      </div>
      <div className="enquiry-div">
        <Enquiry />
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
