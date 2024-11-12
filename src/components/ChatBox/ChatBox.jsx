import React, { useState } from 'react';
import './ChatBox.css';

const predefinedResponses = {
  "i can't login": "If you're having trouble logging in, ensure your username and password are correct. If you're still facing issues, click on 'Forgot Password'.",
  "how do i reset my password?": "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions.",
  "how do i add a product to the cart?": "To add a product to the cart, click the 'Add to Cart' button on the product page.",
  "i want to remove an item from my cart": "To remove an item from your cart, go to your cart and click the 'Remove' button next to the product you want to delete.",
  "where can i view my order?": "You can view your orders in the 'Order History' section on your account page.",
  "payment not working": "Please ensure your payment details are correct. Try using another payment method or contact support for assistance.",
  "how can i apply a discount code?": "To apply a discount code, go to your cart and enter the code in the 'Discount' field before checking out.",
  "can i cancel my order?": "You can cancel your order before it is shipped. Go to 'Order History' and select 'Cancel Order'.",
  "where is my order?": "You can track your order status in the 'Order History' section. If it's shipped, you will see the tracking details there.",
  "help": "I'm here to assist you. Please specify your issue, like 'login', 'payment', 'order', or 'product'. I can help with that!"
};

const getResponse = (input) => {
  const normalizedInput = input.toLowerCase().trim();

  // Match simple common misspellings or unclear queries
  const misspelledQueries = {
    "cant login": "i can't login",
    "reset password": "how do i reset my password?",
    "add cart": "how do i add a product to the cart?",
    "remove cart": "i want to remove an item from my cart",
    "view order": "where can i view my order?",
    "payment issue": "payment not working",
    "discount code": "how can i apply a discount code?",
    "cancel order": "can i cancel my order?",
    "order status": "where is my order?"
  };

  // Check if there's a predefined response
  if (predefinedResponses[normalizedInput]) {
    return predefinedResponses[normalizedInput];
  }

  // Check for misspellings
  for (const key in misspelledQueries) {
    if (normalizedInput.includes(key)) {
      return predefinedResponses[misspelledQueries[key]];
    }
  }

  // Default response for unrecognized queries
  return "Sorry, I didn't understand that. Could you please rephrase or ask about login, payment, order, or product?";
};

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    const botResponse = getResponse(userMessage);

    setMessages([
      ...messages,
      { sender: 'user', text: userMessage },
      { sender: 'bot', text: botResponse }
    ]);
    setUserMessage('');
  };

  const toggleChatBox = () => setIsOpen(!isOpen);

  return (
    <div>
      {isOpen && (
        <div className="chat-box">
          <div className="chat-box-header">
            <h4>Help Chat</h4>
            <button className="close-btn" onClick={toggleChatBox}>X</button>
          </div>
          <div className="chat-box-body">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-box-footer">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
      {!isOpen && (
        <div className="chat-box-icon" onClick={toggleChatBox}>
          <span role="img" aria-label="chat">💬</span>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
