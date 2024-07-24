import React from "react";
import "react-bootstrap";
import "../Style.css";
import { Button } from "react-bootstrap";

const StartNow = () => {
  return (
    <div className="startNow d-flex justify-content-center">
      <div className="start-now-section container d-flex flex-column align-items-center justify-content-center text-center">
        <h3>ARE YOU READY FOR</h3>
        <h1>
          Lets Get Started <br /> Your Project
        </h1>
        <div>
          <Button className="start-now-btn">START NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default StartNow;
