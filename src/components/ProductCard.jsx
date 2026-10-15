import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

function ProductCard({ id, name, price, category, image, stock, onAddToCart }) {
  const navigate = useNavigate();
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <span className="badge bg-secondary mb-2">{category}</span>
        <h5 className="card-title">{name}</h5>
        <p className="card-text fw-bold">{price} DA</p>
        {stock > 0 ? (
          <span className="badge bg-success">En stock</span>
        ) : (
          <span className="badge bg-danger">Rupture de stock</span>
        )}

        <button
          className="btn btn-primary w-100 mt-3"
          disabled={stock === 0}
          onClick={() => onAddToCart(id)}
        >
          Ajouter au panier
        </button>
        <button
          className="btn btn-primary w-100 mt-3"
          onClick={() => navigate(`/products/${id}`)}
        >
          Voir les détails
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
