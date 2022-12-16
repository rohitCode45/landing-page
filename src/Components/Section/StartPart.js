import React from "react";
import './StartPart.scss'
function StartPart({position}) {
  return (
    <div className="main-section-container">
      <div className={position}></div>
      {/* <div className="poly1"></div> */}
      {position==='start' && (
  <div className="section-content">
  <div className="top-part">
    <h1 className="top-part-content">THE RAMAERA EXPANSION</h1>
  </div>
  <div className="lower-part">
    An incredible multi-industrial approach oriented towards financial
    independence, customer focus and serving the best quality to the people.
  </div>
  </div>
      )}
    
    
    </div>
  );
}

export default StartPart;
