import React from 'react';
import { Link, Redirect } from 'react-router-dom'

export default class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
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

          {this.props.loggedIn ?
            <div className="header-buttons-container">
              <Link to="/feed">Feed</Link>
              {this.props.currentUser.id &&
                <Link to={`/profile/${this.props.currentUser.id}`}>Profile</Link>
              }
              <Link to="/" onClick={this.props.handleLogout}>Logout</Link>
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
