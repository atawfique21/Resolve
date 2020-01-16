import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Header from './Components/header'
import LandingPage from './Components/LandingPage'

function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegisterForm />
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
