import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="homepage">
        <h1>WELCOME TO MY STORE</h1>
        <p>Discover our products</p>
        <button onClick={handleclick}>view products</button>
      </div>
    </>
  );
};

export default Home;
