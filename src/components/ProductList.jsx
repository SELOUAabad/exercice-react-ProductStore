import React, { useState, useCallback } from "react";
import ProductCard from "./ProductCard";
import products from "../data/Products";

const ProductList = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = useCallback((id) => {
    setCartCount((c) => c + 1);
  }, []);

  return (
    <div className="container my-4">
      <h4>Panier : {cartCount}</h4>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-lg-4" key={product.id}>
            <ProductCard {...product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
