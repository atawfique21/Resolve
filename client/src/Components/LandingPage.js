import React from 'react';

export default function LandingPage() {
  return (
    <div className="landingpage-wrapper">
      <div className="landingpage-content">
        <img src="https://designshack.net/wp-content/uploads/placeholder-image.png" alt="image of application"></img>
        <h3>Resolve helps you <span className="blue-highlight">create</span>, <span className="blue-highlight">track</span> and <span className="blue-highlight">share</span> personal and professional goals.</h3>
        <div className="landpage-buttons header-buttons-container">
          <button>Become a resolver now</button>
        </div>
      </div>
    </div>
  )
}