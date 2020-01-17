import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landingpage-wrapper">
      <div className="landingpage-content">
        <img src="https://designshack.net/wp-content/uploads/placeholder-image.png" alt="image of application"></img>
        <h3>Resolve helps you <span className="blue-highlight">create</span>, <span className="blue-highlight">track</span> and <span className="blue-highlight">share</span> personal and professional goals.</h3>
        <div className="header-buttons-container redirect">
          <Link to="/register">Become a Resolver Now</Link>
        </div>
      </div>
    </div>
  )
}