import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-desc">
          <h1>Resolve</h1>
          <h5>The social way to resolve goals</h5>
        </div>
        <div className="header-buttons-container">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    </header>
  )
}