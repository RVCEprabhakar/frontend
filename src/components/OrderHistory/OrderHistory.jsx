// OrderHistory.jsx
import React, { useEffect, useState } from 'react';
import './OrderHistory.css'; // Make sure to import the CSS file

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order history from localStorage
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrders(orderHistory);
  }, []);

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <h3>Order ID: {order.orderId}</h3>
              <p>Status: {order.status}</p>
              <p>Products: {order.products.join(', ')}</p>
              <p>Total Amount: ${order.totalAmount}</p>
              <p>Ordered on: {order.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
