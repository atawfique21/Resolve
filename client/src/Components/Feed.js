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
    // try {
    const response = await axios(`http://localhost:3001/auth`);
    console.log(response)
    //   this.setState({
    //     users: response.data
    //   })
    // } catch (e) {
    //   console.error(e)
    // }
  }

  render() {
    return (
      <div className="feed-wrapper">
        <div className="feed-content">

        </div>
      </div>
    )
  }
}

export default Feed