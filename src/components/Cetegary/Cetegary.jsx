import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Cetegary.css';

import BlueJeansImage from '../../assets/images/Cetegary/jeans/blue-jeans.jpg';
import WhiteTshirtImage from '../../assets/images/Cetegary/Tshirt/white-Tshirt.jpg';
import BlueShoesImage from '../../assets/images/Cetegary/shoes/blue-shoes.jpg';

const products = [
  {
    id: 1,
    name: 'Blue Jeans',
    image: BlueJeansImage,
    cetegary: 'jeans',
    price: 39.99,
  },
  {
    id: 2,
    name: 'White Tshirt',
    image: WhiteTshirtImage,
    cetegary: 'Tshirt',
    price: 19.99,
  },
  {
    id: 3,
    name: 'Blue Shoes',
    image: BlueShoesImage,
    cetegary: 'shoes',
    price: 59.99,
  },
];

const Cetegary = () => {
  const { category } = useParams(); // Extract category from the URL
  const navigate = useNavigate();

  // Filter products based on the category
  const filteredProducts = products.filter((product) => product.cetegary === category);

  const handleAddToCart = (product) => {
    // Store the product in localStorage before navigating to the login page
    localStorage.setItem('productToAdd', JSON.stringify(product));
    navigate('/login'); // Redirect to Login Page
  };

  return (
    <div className="category-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <h2>No products available in this category.</h2>
      )}
    </div>
  );
};

export default Cetegary;
