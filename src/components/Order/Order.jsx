// Order.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const navigate = useNavigate();

  const handleOrderConfirmation = () => {
    const orderDetails = {
      orderId: Math.floor(Math.random() * 1000),  // Random order ID for demo
      products: ['Shirt', 'Jeans'],               // List of products (dummy data)
      totalAmount: 50,                            // Total amount (dummy data)
      date: new Date().toLocaleString(),          // Current date and time
      status: 'Paid'
    };

    // Save to localStorage
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory.push(orderDetails);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));

    alert('Order confirmed successfully!');
    navigate('/bill-payment');
  };

  return (
    <div className="order-container">
      <h2>Your Order</h2>
      <p>Review your order before confirming. Once confirmed, we will process your order and send you a confirmation.</p>
      <button className="confirm-order-btn" onClick={handleOrderConfirmation}>Confirm Order</button>
    </div>
  );
};

export default Order;
