import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: 'Hannah',
            last_name: 'Reilly',
            profile_pic_url: 'https://media-exp1.licdn.com/dms/image/C4D03AQGmzrAJOFCUBA/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=Jdi_jghFaIqdNWivMFf6zFDLrpicS77YnD2d9E2Dqgk',
            fun_fact: 'My name is a palidrone',
            location:'NYC',
            apiDataLoaded: false
        }
    };

    async componentDidMount() {
        try {
            const response = await axios("http://localhost:3001/profiles")
            this.setState({
                profile: response.data,
                apiDataLoaded: true
            });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className="profile">
                <h1>{this.state.first_name}</h1>
                <h1>{this.state.last_name}</h1>
                <img src={this.state.profile_pic_url} alt="pic"></img>
                <h3>{this.state.fun_fact}</h3>
                <h4>{this.state.location}</h4>
            </div>
        )
    }
}

export default Profile;