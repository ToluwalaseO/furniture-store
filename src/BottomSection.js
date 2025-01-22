import React from "react";
import "./BottomSection.css";
import chair6 from './Assets/chair6.jpg'

const BottomSection = () => {
  return (
    <div className="bottom-section">
      <div className="image-card full">
        <img src={chair6} alt="Design Desk" />
        <div className="body21">
          <h1>The DesignDesk </h1>
          <h1 class ="special-h1">atCreate</h1>
          <p>"100% free design help for your fall refresh and beyond"</p>
          <button className="btn-1">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default BottomSection
