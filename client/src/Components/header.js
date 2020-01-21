import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.history.push('/feed')
    } else {
      this.props.history.push('/')
    }
  }

  handleProfileClick = () => {
    this.props.history.push(`/myprofile`)
  }

  render() {
    return (
      <header>
        <div className="header-container">
          <div className="logo-desc" onClick={this.handleClick}>
            <h1>Resolve</h1>
            <h5>The social way to resolve goals</h5>
          </div>
          {this.props.currentUser ?
            <div className="header-buttons-container">
              <Link to="/feed">Feed</Link>
              {this.props.currentUser.id &&
                <Link onClick={this.handleProfileClick}>Profile</Link>
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
      </header >
    )
  }
}

export default withRouter(Header)