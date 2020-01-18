import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feed extends Component {
  render() {
    const linkStyle = {
      textDecoration: "none",
    }

    return (
      <div className="feedpage-wrapper">
        <div className="feedpage-content">
          {this.props.users.map(user => (
            <Link style={linkStyle} to={`/profile/${user.id}`}>
              <div key={user.id} className="users">
                <h4>{user.first_name}</h4>
                <img src={user.profile_pic_url} alt="user" />
              </div>
            </Link>
          ))}
        </div>
      </div >
    )
  }
}

export default Feed