import { useParams, useNavigate } from "react-router";
import products from "../data/products";

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container my-4">
        <h2>Product not found</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <img src={product.image} alt={product.name} style={{ maxWidth: 300 }} />
      <h1>{product.name}</h1>
      <span className="badge bg-secondary">{product.category}</span>
      <p className="fw-bold">{product.price} DA</p>
    </div>
  );
};

export default ProductsDetails;
