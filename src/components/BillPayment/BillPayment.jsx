import React from 'react';
import { useNavigate } from 'react-router-dom';
import qrCodeImage from '../../assets/images/qr-code.jpg';  // Correct relative path to image
import './BillPayment.css';

const BillPayment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('Payment Successful! Thank you for your purchase.');
    navigate('/');
  };

  return (
    <div className="bill-container">
      <h2>Bill Payment</h2>
      <img 
        src={qrCodeImage} 
        alt="QR Code" 
        className="qr-code-image" 
      />
      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
};

export default BillPayment;
