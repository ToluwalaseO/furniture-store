import React from "react";
import "./TopSection.css";
import chair3 from './Assets/chair3.jpg'
import chair4 from './Assets/chair4.jpg'
import chair5 from './Assets/chair5.jpg'

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="image-card1">
        <img src={chair4} alt="topsection image" />
        <h3>New in Rochester silverware</h3>
      </div>
      <div className="image-card2">
        <img src={chair5} alt="Design Desk" />
          <h2>Shop Sectionals</h2>
          <button className="btn-green">See Collection</button>      
     </div>
      <div className="image-card3">
        <img src={chair3} alt="topsection image" />
        <h3>Cosy Layers</h3>
      </div>
    </div>
  );
};

export default TopSection
