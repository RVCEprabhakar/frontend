// About.jsx
import React from 'react';
import './About.css'; // Make sure the CSS file is imported

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Us</h2>
      <p className="about-description">
        Welcome to our website! Here, we showcase our cutting-edge projects
        and innovative solutions. Below is a brief overview of the exciting
        work we've been doing. 🚀
      </p>
      
      <div className="projects-section">
        <h3 className="projects-heading">Our Projects</h3>
        
        <div className="project">
          <h4 className="project-title">🧑‍💻 AI-powered Pedestrian Detection</h4>
          <p>
            We developed a pedestrian detection system using YOLOv9, aimed at enhancing road safety and
            optimizing performance in real-time.
          </p>
        </div>
        
        <div className="project">
          <h4 className="project-title">🌍 U-Net for Semantic Segmentation</h4>
          <p>
            Our satellite image segmentation model using U-Net helps in distinguishing land and water bodies for
            real-world applications like environmental monitoring.
          </p>
        </div>

        <div className="project">
          <h4 className="project-title">🛍️ Boutique Management System</h4>
          <p>
            We designed an intuitive boutique management system to streamline operations and improve customer experience.
          </p>
        </div>
      </div>

      <p className="contact-info">
        Want to know more? Feel free to <a href="/contact">contact us</a>! 📩
      </p>
    </div>
  );
};

export default About;
