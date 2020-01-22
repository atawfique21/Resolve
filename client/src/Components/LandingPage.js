import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landingpage-wrapper">
      <div className="landingpage-content">
        <img src="https://i.imgur.com/128nsB0.png" alt="image of application"></img>
        <h3>Resolve helps you <span className="blue-highlight">track</span> & <span className="blue-highlight">share</span> personal/professional goals.</h3>
        <div className="header-buttons-container redirect">
          <Link to="/register">Become a Resolver Now</Link>
        </div>
      </div>
    </div>
  )
}