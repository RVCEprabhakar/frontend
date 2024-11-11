import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    // Fetch the saved cart from localStorage when the component mounts
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  // Remove product from cart
  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Increase quantity of a product
  const handleIncreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Decrease quantity of a product
  const handleDecreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handle Checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      navigate('/order'); // Redirect to Order page
    }
  };

  // Add a product to the cart (for example, from a product category page)
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productExists = cart.some(item => item.id === product.id);
    
    if (productExists) {
      // If the product is already in the cart, don't add again, just increase the quantity
      handleIncreaseQuantity(product);
    } else {
      // If it's a new product, add it with quantity 1
      const newProduct = { ...product, quantity: 1 };
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleDecreaseQuantity(item)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </button>
              </div>
            </div>
            <button 
              className="remove-button" 
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className="checkout-container">
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
