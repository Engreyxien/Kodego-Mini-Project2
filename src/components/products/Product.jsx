import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Row, Col, Form } from "react-bootstrap";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [showAddToCartModal, setShowAddToCartModal] = useState(false);
  const [showReadMoreModal, setShowReadMoreModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const handleBuyNow = (product) => {
    setShowBuyNowModal(true);
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setShowAddToCartModal(true);
    setSelectedProduct(product);
  };

  const handleReadMore = (product) => {
    setSelectedProduct(product);
    setShowReadMoreModal(true);
  };

  const handleCloseModal = () => {
    setShowBuyNowModal(false);
    setShowAddToCartModal(false);
    setShowReadMoreModal(false);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory)
    );
  });

  return (
    <div>
      <Form className="text-center mt-4 mb-4">
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-1"
        />
        <Form.Control
          as="select"
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mb-2"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </Form.Control>
      </Form>

      <Row xs={1} md={3} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <Card className="card">
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

      <Modal show={showBuyNowModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Buy Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to buy this product?</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddToCartModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to add this product to your cart?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showReadMoreModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedProduct?.description}</p>
          <p>Price: ${selectedProduct?.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Product;
