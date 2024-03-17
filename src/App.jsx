import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
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
        <div id="About">
          <About />
        </div>
        <div id="Product">
          <Product products={products} />
        </div>
      </section>
      <div id="Footer">
        <Footer id="Footer" />
      </div>
    </div>
  );
};

export default App;
