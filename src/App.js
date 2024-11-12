import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import BillPayment from './components/BillPayment/BillPayment';
import Cetegary from './components/Cetegary/Cetegary';
import OrderHistory from './components/OrderHistory/OrderHistory';
import About from './components/About/About';
import Contact from './components/Contact/Contact'; // Import Contact component
import ChatBox from './components/ChatBox/ChatBox'; // Import ChatBox component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/bill-payment" element={<BillPayment />} />
        <Route path="/cetegary/:category" element={<Cetegary />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ChatBox /> {/* Always visible chatbox */}
    </Router>
  );
}

export default App;
