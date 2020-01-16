import React, {Component} from 'react';


export default class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password:'',
            fun_fact:'',
            location:'',
            first_name:'',
            last_name:'',
            profile_pic_url:''
        }
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
   }

    render() {
        return (
            <form onSubmit={(e) => this.props.handleRegister
            (e, {
            username:this.state.username, 
            password:this.state.password,
            fun_fact:this.state.fun_fact,
            location:this.state.location,
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            profile_pic_url:this.state.profile_pic_url
            })}>
                <h2>Start Resolving/Register</h2>
                <label htmlFor= "username">Username</label>
                <input
                    type = "text"
                    name = "username"
                    value = {this.state.username}
                    onChange = {this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type = "password"
                    name = "password"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                />
                <label htmlFor="fun_fact">Fun Fact</label>
                <input
                    type="text"
                    name="fun_fact"
                    value={this.state.fun_fact}
                    onChange={this.handleChange}
                /> 
                <label htmlFor="location">Your Location</label>
                <input
                    type="text"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
                />                                 
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                />                
                <label htmlFor="profile_pic_url">profile url</label>
                <input
                    type="text"
                    name="profile_pic_url"
                    value={this.state.profile_pic_url}
                    onChange={this.handleChange}
                />
                <input type="submit"/>              
            </form>
        )
    }
}