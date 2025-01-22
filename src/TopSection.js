import React from "react";
import "./TopSection.css";

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="image-card large">
        {/* <img src="/path-to-image1.jpg" alt="Sectional Sofas" /> */}
        <div className="overlay">
          <h2>Shop Sectionals</h2>
          <button className="btn-green">See Collection</button>
        </div>
      </div>
      <div className="image-card small">
        {/* <img src="/path-to-image2.jpg" alt="Rochester Silverware" /> */}
        <h3>New in Rochester silverware</h3>
      </div>
      <div className="image-card small">
        {/* <img src="/path-to-image3.jpg" alt="Cosy Layers" /> */}
        <h3>Cosy Layers</h3>
      </div>
    </div>
  );
};

export default TopSection
