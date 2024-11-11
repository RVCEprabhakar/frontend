import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
import jeansImage from '../../assets/images/jeans.jpg';
import TshirtImage from '../../assets/images/Tshirt.jpg';
import shoesImage from '../../assets/images/shoes.jpg';

const products = [
  {
    id: 1,
    name: 'T-shirt',
    description: 'Comfortable cotton T-shirt',
    image: TshirtImage,
    category: 'Tshirt',
    price: '$29.99',
    brand: 'Fashion Co.',
    rating: 4.5,
    company: 'Fashion Inc.',
  },
  {
    id: 2,
    name: 'Jeans',
    description: 'Stylish blue jeans',
    image: jeansImage,
    category: 'jeans',
    price: '$49.99',
    brand: 'Denim World',
    rating: 4.7,
    company: 'Denim Co.',
  },
  {
    id: 3,
    name: 'Sneakers',
    description: 'High-quality leather sneakers',
    image: shoesImage,
    category: 'shoes',
    price: '$79.99',
    brand: 'SneakerShop',
    rating: 4.8,
    company: 'ShoeMasters',
  },
];

const Product = () => {
  const navigate = useNavigate();

  const handleProductClick = (category) => {
    navigate(`/cetegary/${category}`);
  };

  return (
    <div className="product-container">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.category)}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <p className="product-brand">Brand: {product.brand}</p>
              <p className="product-company">Company: {product.company}</p>
              <div className="product-rating">
                <span>Rating: {product.rating} ⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
