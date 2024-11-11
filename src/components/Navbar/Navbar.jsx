// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Boutique</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/product">Product</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/order">Order</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/order-history">Order History</a></li> {/* Link to Order History */}
      </ul>
    </nav>
  );
};

export default Navbar;
