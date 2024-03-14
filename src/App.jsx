import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Product from "./components/products/Product";
import Home from "./components/home/Home";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <div className="products">
        <Product products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
