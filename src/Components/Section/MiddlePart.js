import React from "react";
import "./MiddlePart.scss";
import second from "./../Constants/Logos/tech-big.png";

function MiddlePart({ left, right }) {
  return (
    <div className="mainMiddleContainer">
      <div className="leftPart">
        <div className="leftPartContent">
          {left.type === "ICON" && (
            <div className="imgBoxLeft">
              <img style={{ width: "27em" }} src={left.content} />
            </div>
          )}
          {left.type === "TEXT" && (
            <div className="text-container">
              <div className="heading">
                <img style={{ width: "5em" }} src={left.smIcon} />
                <h2>
                  {left.headText} {left.headText !== "" && <br></br>}{" "}
                  <span className={left.id}>{left.spanText}</span>
                </h2>
              </div>
              <div className="details"> {left.details}</div>
              <div className="btn">Read More</div>
            </div>
          )}
        </div>
      </div>
      <div className="rightPart">
        <div className="rightPartContent">
          {right.type === "ICON" && (
            <div className="imgBoxRight">
              <img style={{ width: "27em" }} src={right.content} />
            </div>
          )}
          {right.type === "TEXT" && (
            <div className="text-container">
              <div className="heading">
                <img style={{ width: "5em" }} src={right.smIcon} />
                <h2>
                  {right.headText} {right.headText !== "" && <br></br>}{" "}
                  <span className={right.id}>{right.spanText}</span>
                </h2>
              </div>
              <div className="details"> {right.details}</div>
              <div className="btn">Read More</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiddlePart;
