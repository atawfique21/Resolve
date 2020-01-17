import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Header from './Components/header'
import LandingPage from './Components/LandingPage'
import Feed from './Components/Feed'
import { Route } from 'react-router-dom'
import { loginUser, registerUser } from './Services/apiHelper'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      errorText: ""
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: "Please enter Username & Password!"
      })
    } else {
      const currentUser = await loginUser(loginData);
      this.setState({ currentUser })
      console.log(currentUser)
      this.setState({
        errorText: ''
      })
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: "Supply Username & Password!"
      })
    } else {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser,
        errorText: ''
      })
      console.log(currentUser)
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div>
            <Header loggedIn={this.state.currentUser} />
            <LandingPage />
          </div>
        )} />
        <Route path="/login" render={() => (
          <div>
            <Header loggedIn={this.state.currentUser} />
            <LoginForm handleLogin={this.handleLogin} errorText={this.errorText} />
          </div>
        )} />
        <Route path="/register" render={() => (
          <div>
            <Header loggedIn={this.state.currentUser} />
            <RegisterForm handleRegister={this.handleRegister} />
          </div>
        )} />
        <Route path="/feed" render={() => (
          <div>
            <Header loggedIn={this.state.currentUser} />
            <Feed />
          </div>
        )} />
      </div>
    );
  }
}

export default App;
