import React from "react";
import Header from "../../../components/user/header/Header";
import Landing from "../../../components/user/landing/Landing";
import Services from "../../../components/user/services/Services";

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
    </div>
  );
}

export default Home;
