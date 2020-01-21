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
import SweetAlert from 'react-bootstrap-sweetalert'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
      users: [],
      goals: [],
      pinpoint: 'https://image.flaticon.com/icons/png/512/67/67347.png',
      apiDataLoaded: false,
      errorText: "",
      alert: null
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

  handleRegister = async (registerData) => {
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
      this.onConfirmFinish()
      this.props.history.push('/feed');
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

  confirmRegister = (e, registerData) => {
    e.preventDefault();
    const getAlert = () => (
      <SweetAlert
        success
        title="Welcome to Resolve!"
        onConfirm={() => this.handleRegister(registerData)}
        onCancel={() => this.handleRegister(registerData)}
        timeout={3000}
      >
        This confirmation message will automatically close in 3 seconds.
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  onConfirmFinish = () => {
    this.setState({
      alert: null
    });
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
        <Header loggedIn={this.state.currentUser} handleLogout={this.handleLogout} currentUser={this.state.currentUser} />
        <Route exact path="/" render={() => (
          <LandingPage />
        )} />
        <Route path="/login" render={() => (
          <LoginForm handleLogin={this.handleLogin} errorText={this.state.errorText} />
        )} />
        <Route path="/register" render={() => (
          <div>
            <RegisterForm handleRegister={this.confirmRegister} />
            {this.state.alert}
          </div>
        )} />
        <Route path="/feed" render={(props) => (
          <div>
            <Feed />
          </div>
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
