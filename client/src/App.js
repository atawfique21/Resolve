import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Header from './Components/header'
import LandingPage from './Components/LandingPage'
import Feed from './Components/Feed'
import { Route, withRouter } from 'react-router-dom'
import { loginUser, registerUser, verifyUser } from './Services/apiHelper'
// import Profile from './Components/Profile';

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
      try {
        const currentUser = await loginUser(loginData);
        this.setState({ currentUser })
        console.log(currentUser)
        this.setState({
          errorText: ''
        })
        this.props.history.push('/feed');
      } catch (e) {
        console.log(e.message)
        if (e.message === "Request failed with status code 401") {
          e.message = "Wrong username or password"
          this.setState({
            errorText: e.message
          })
        } else {
          this.setState({
            errorText: e.message
          })
        }
      }
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

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  componentDidMount() {
    this.handleVerify();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div>
            <Header loggedIn={this.state.currentUser} handleLogout={this.handleLogout} />
            <LandingPage />
          </div>
        )} />
        <Route path="/login" render={() => (
          <div>
            <Header loggedIn={this.state.currentUser} handleLogout={this.handleLogout} />
            <LoginForm handleLogin={this.handleLogin} errorText={this.state.errorText} />
          </div>
        )} />
        <Route path="/register" render={() => (
          <div>
            <Header loggedIn={this.state.currentUser} handleLogout={this.handleLogout} />
            <RegisterForm handleRegister={this.handleRegister} />
          </div>
        )} />
        <Route path="/feed" render={() => (
          <div>
            <Header loggedIn={this.state.currentUser} handleLogout={this.handleLogout} />
            <Feed />
          </div>
        )} />
        <Route path="/profile" render={() => (
          <div>
            <Header />
            <Profile />
          </div>
        )} />
        <Route exact path="/user/:id" render={(props) => (
          <Header />
          // <Profile />
        )} />
      </div>
    );
}

export default withRouter(App);
