// Home.jsx
import React from "react";
import './Home.css';

const Home = () => {
  const title = 'Shop now here...';
  const likes = 'Hurry up....!';
  const link = 'https://www.bing.com/images/search?view=detailV2&ccid=bKOCeh0q&id=E1690E339A4B58AD3D7172ED9958B1F638BCC60A';

  return (
    <div className="home">
      <h1>{title}</h1>
      <p>{likes}</p>
      <p>{'Hi, please come here. We have great offers!'}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Go here</a>
    </div>
  );
};

export default Home;
