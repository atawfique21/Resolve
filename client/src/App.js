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
import MyProfile from './Components/MyProfile'

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
      alert: null,
      counter: 0
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
      this.onConfirmFinish();
      const userResponse = await axios(`https://peaceful-forest-79984.herokuapp.com/auth`);
      const goalResponse = await axios(`https://peaceful-forest-79984.herokuapp.com/goals`);
      this.setState({
        users: userResponse.data,
        goals: goalResponse.data,
        apiDataLoaded: true
      });
      this.props.history.push('/feed');
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

  onlyRegisterOnce = (registerData) => {
    if (this.state.counter === 0) {
      this.handleRegister(registerData)
      let button = document.querySelector('.btn-primary')
      button.style.display = 'none';
      this.setState({
        counter: 1
      })
    } else {
      return
    }
  }

  confirmRegister = (e, registerData) => {
    e.preventDefault();
    const getAlert = () => (
      <SweetAlert
        success
        title="Welcome to Resolve!"
        onConfirm={() => this.onlyRegisterOnce(registerData)}
        onCancel={() => this.onlyRegisterOnce(registerData)}
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
      const userResponse = await axios(`https://peaceful-forest-79984.herokuapp.com/auth`);
      const goalResponse = await axios(`https://peaceful-forest-79984.herokuapp.com/goals`);
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
          <LoginForm handleLogin={this.handleLogin} errorText={this.state.errorText} currentUser={this.state.currentUser} />
        )} />
        <Route path="/register" render={() => (
          <div>
            <RegisterForm handleRegister={this.confirmRegister} currentUser={this.state.currentUser} />
            {this.state.alert}
          </div>
        )} />
        <Route path="/feed" render={(props) => (
          <div>
            <Feed currentUser={this.state.currentUser} />
          </div>
        )} />
        {this.state.apiDataLoaded &&
          <Route exact path="/profile/:id" render={(props) => (
            <Profile
              users={this.state.users}
              goals={this.state.goals}
              pinpoint={this.state.pinpoint}
              userId={props.match.params.id}
              currentUser={this.state.currentUser}
            />
          )} />
        }
        {this.state.apiDataLoaded &&
          <Route exact path="/myprofile" render={(props) => (
            <MyProfile
              users={this.state.users}
              goals={this.state.goals}
              pinpoint={this.state.pinpoint}
              userId={props.match.params.id}
              currentUser={this.state.currentUser}
            />
          )} />
        }
      </div>
    );
  }
}

export default withRouter(App);
