import React from 'react';
import { Link, Redirect } from 'react-router-dom'

export default class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loggedIn: this.props.loggedIn,
      redirect_home: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      redirect_home: true
    })
  }

  render() {
    return (
      <header>
        <div className="header-container">
          <div className="logo-desc" onClick={this.handleClick}>
            <h1>Resolve</h1>
            <h5>The social way to resolve goals</h5>
          </div>

          {this.state.loggedIn ?
            <div className="header-buttons-container">
              <Link to="/feed">Feed</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/">Logout</Link>
            </div>
            :
            <div className="header-buttons-container">
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </div>
          }

        </div>
        {this.state.redirect_home ? <Redirect to="/" /> : null}
      </header >
    )
  }
}