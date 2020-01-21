import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      fun_fact: '',
      location: '',
      first_name: '',
      last_name: '',
      profile_pic_url: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    if (!this.state.profile_pic_url) {
      this.props.handleRegister(e, { username: this.state.username, password: this.state.password, fun_fact: this.state.fun_fact, location: this.state.location, first_name: this.state.first_name, last_name: this.state.last_name, profile_pic_url: "http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png" })
    } else {
      this.props.handleRegister(e, { username: this.state.username, password: this.state.password, fun_fact: this.state.fun_fact, location: this.state.location, first_name: this.state.first_name, last_name: this.state.last_name, profile_pic_url: this.state.profile_pic_url })
    }
  }

  render() {
    return (
      <div>
        {this.props.currentUser ?
          <div>
            <div className="restrict">
              <h1>You are already logged in. Go to <a href="/feed">feed.</a></h1>
            </div>
          </div>
          :
          <div className="auth">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <h2>We are resolve and we can help you start
            <div className='typewriter'>
                  <Typewriter
                    options={{
                      strings: ['Resolving', 'Saving', 'Eating Healthy', 'Jogging', 'Cooking More'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </h2>
              <span className="field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  autoComplete="off"
                  autoFocus={true}
                  autoCorrect="off"
                  spellCheck="false"
                />
              </span>
              <span className="field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="fun_fact">Fun Fact</label>
                <input
                  type="text"
                  name="fun_fact"
                  value={this.state.fun_fact}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="location">Your Location</label>
                <input
                  type="text"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
              </span>
              <span className="field">
                <label htmlFor="profile_pic_url">profile url</label>
                <input
                  type="text"
                  name="profile_pic_url"
                  value={this.state.profile_pic_url}
                  onChange={this.handleChange}
                />
              </span>
              <input type="submit" className="submit" value="Register" />
            </form>
            <div className="header-buttons-container redirect">
              <Link to="/login">Already Resolving?</Link>
            </div>
          </div>
        }
      </div>
    )
  }
}