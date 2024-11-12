import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Username validation: Only alphabetical characters allowed
    const usernameRegex = /^[A-Za-z]+$/;

    // Password validation: Minimum 8 characters, at least one special character, letters, and numbers
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!username) {
      alert('Please enter a username.');
      return;
    }

    if (!usernameRegex.test(username)) {
      alert('Invalid username! Please enter a valid name using only letters.');
      return;
    }

    if (!password) {
      alert('Please enter a password.');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Invalid password! Password must be at least 8 characters long, contain letters, numbers, and at least one special character.');
      return;
    }

    // If both username and password are valid
    localStorage.setItem('isLoggedIn', 'true');
    alert('Login Successful!');

    // Handle adding product to cart if redirected with product data
    const productToAdd = JSON.parse(localStorage.getItem('productToAdd'));
    if (productToAdd) {
      let cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push({ ...productToAdd, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.removeItem('productToAdd');
      alert('Product added to cart!');
    }

    navigate('/cart');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
