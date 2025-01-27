import React from "react";
import { Product } from "./Product";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import "./Collections.css";

const Collections = () => {
  return (
    <div className="product-grid">
      <h2>New Collections</h2>
      <p>Products that give you the comfort and style you need for everyday living.</p>
      <div className="grid">
        {Product.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
