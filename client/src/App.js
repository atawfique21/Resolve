import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Header from './Components/header'
import LandingPage from './Components/LandingPage'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => (
        <div>
          <Header />
          <LandingPage />
        </div>
      )} />
      <Route path="/login" render={() => (
        <div>
          <Header />
          <LoginForm />
        </div>
      )} />
      <Route path="/register" render={() => (
        <div>
          <Header />
          <RegisterForm />
        </div>
      )} />
    </div>
  );
}

export default App;
