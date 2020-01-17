import React, { Component } from 'react';
import { Link } from 'react-router-dom'


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

  render() {
    return (
      <div className="auth">
        <form onSubmit={(e) => this.props.handleRegister(e, {
          username: this.state.username,
          password: this.state.password,
          fun_fact: this.state.fun_fact,
          location: this.state.location,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          profile_pic_url: this.state.profile_pic_url
        })}>
          <h2>Start Resolving</h2>
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
    )
  }
}