import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login Successful!');

      const productToAdd = JSON.parse(localStorage.getItem('productToAdd'));
      if (productToAdd) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push({ ...productToAdd, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.removeItem('productToAdd');
        alert('Product added to cart!');
      }

      navigate('/cart');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
