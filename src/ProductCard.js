import React from "react";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  const { name, price, category, image } = data; // Destructure product data
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <div className="rep">
      <h3>{name}</h3>
      <p>{price}</p>
      </div> 
      <span>{category}</span>
    </div>
  );
};

export default ProductCard;
