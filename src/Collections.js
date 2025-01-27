import React from "react";
import { Product } from "./Product";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import "./Collections.css";

const Collections = () => {
  return (
    <div className="product-grid">
      <h1>New Collections</h1>
      <p className="req">These Products are made with wood from forest
          certified to be responsibly 
        </p>
        <button className="final">See Collection</button>
      <div className="grid">
        {Product.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Collections;


        
     