import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="HomeConntainer">
      <h1>Welcome to the Pekeng Store</h1>
      <p>Explore our amazing products!</p>
    </div>
  );
}

export default Home;
