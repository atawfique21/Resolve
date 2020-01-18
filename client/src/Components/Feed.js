import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddGoal from './AddGoal'
import { createGoal } from '../Services/apiHelper'


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

  handleAdd = async (e, sentGoal) => {
    e.preventDefault();
    const currentGoal = await createGoal(sentGoal);
    console.log(currentGoal)
  }

  render() {
    const linkStyle = {
      textDecoration: "none",
    }

    return (
      <div className="feedpage-wrapper">
        <AddGoal handleAdd={this.handleAdd} />
        <div className="feedpage-content">
          {this.state.users.map(user => (
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