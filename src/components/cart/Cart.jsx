import React from "react";
import "./Cart.css";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  addProduct = (product) => {
    this.setState({ products: [...this.state.products, product] });
  };

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  }
}
