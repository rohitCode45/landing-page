import React from "react";
import NavigationBar from "./NavigationBar";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="navBar">
        <NavigationBar />
      </div>

      <div className="landing-page-content">
        <div className="top-part">
          <h1 className="top-part-content">RAMAERA</h1>
          <h1 className="top-part-content">INDUSTRIES</h1>
        </div>
        <div className="middle-part">
          An incredible multi-industrial approach oriented towards financial
          independence, customer focus and serving the best quality to the
          people.
        </div>
        <div className="lower-part">Explore More</div>
      </div>
    </div>
  );
}

export default LandingPage;
