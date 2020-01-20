import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Header from './Components/header'
import LandingPage from './Components/LandingPage'
import Feed from './Components/Feed'
import axios from 'axios'
import { Route, withRouter } from 'react-router-dom'
import { loginUser, registerUser, verifyUser } from './Services/apiHelper'
import Profile from './Components/Profile';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      users: [],
      goals: [],
      pinpoint: 'https://image.flaticon.com/icons/png/512/67/67347.png',
      apiDataLoaded: false,
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
    }
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    console.log(currentUser);
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

  componentDidMount = async () => {
    this.handleVerify();
    try {
      const userResponse = await axios(`http://localhost:3001/auth`);
      const goalResponse = await axios(`http://localhost:3001/goals`);
      this.setState({
        users: userResponse.data,
        goals: goalResponse.data,
        apiDataLoaded: true
      })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.currentUser} handleLogout={this.handleLogout} />
        <Route exact path="/" render={() => (
            <LandingPage />
        )} />
        <Route path="/login" render={() => (
            <LoginForm handleLogin={this.handleLogin} errorText={this.state.errorText} />
        )} />
        <Route path="/register" render={() => (
            <RegisterForm handleRegister={this.handleRegister} />
        )} />
        <Route path="/feed" render={(props) => (
            <Feed users={this.state.users} currentUser={this.state.currentUser}/>
        )} />
        <Route exact path="/profile/:id" render={(props) => (
            <Profile
              users={this.state.users}
              goals={this.state.goals}
              pinpoint={this.state.pinpoint}
              userId={props.match.params.id}
            />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
