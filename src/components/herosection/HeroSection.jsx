import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Row, Col } from "react-bootstrap";
import "./HeroSection.css";
import Product from "../products/Product";

const HeroSection = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleSearch = () => {
    const searchInput = document.querySelector('input[type="text"]').value;

    // Fetch data based on the search input
    fetch(`https://fakestoreapi.com/products?search=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        // Handle the data returned from the API
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCategorySelect = (e) => {
    const selectedCategory = e.target.value;

    // Fetch data based on the selected category
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        // Handle the data returned from the API
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleBuyNow = (product) => {
    // Handle buy now action
  };

  const handleAddToCart = (product) => {
    // Handle add to cart action
  };

  const handleReadMore = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="hero">
      <input type="text" placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
      <select onChange={handleCategorySelect}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button>Get Categories</button>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="card" onClick={() => handleReadMore(product)}>
              <Card.Img
                variant="top"
                src={product.image}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => handleBuyNow(product)}>Buy Now</Button>
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
                <Button onClick={() => handleReadMore(product)}>
                  Read More
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct && selectedProduct.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && selectedProduct.description}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default HeroSection;
