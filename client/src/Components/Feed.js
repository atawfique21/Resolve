import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios(`http://localhost:3001/auth`);
      this.setState({
        users: response.data
      })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div className="feedpage-wrapper">
        <div className="feedpage-content">
          {this.state.users.map(user => (
            <div key={user.id} className="users">
              <h4>{user.first_name}</h4>
              <img src={user.profile_pic_url} alt="user" />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Feed