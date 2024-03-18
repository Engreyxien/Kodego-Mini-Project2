import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Product from "./components/products/Product";
import About from "./components/aboutus/About";
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
      <nav>
        <Header />
      </nav>
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Product">
        <Product products={products} />
      </section>
      <footer id="Footer">
        <Footer id="Footer" />
      </footer>
    </div>
  );
};

export default App;
