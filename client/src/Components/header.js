import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-desc">
          <h1>Resolve</h1>
          <h5>The social way to resolve goals</h5>
        </div>
        <div className="header-buttons-container">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  )
}