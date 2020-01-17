import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: 'Hannah',
            last_name: 'Reilly',
            profile_pic_url: 'https://media-exp1.licdn.com/dms/image/C4D03AQGmzrAJOFCUBA/profile-displayphoto-shrink_200_200/0?e=1584576000&v=beta&t=Jdi_jghFaIqdNWivMFf6zFDLrpicS77YnD2d9E2Dqgk',
            fun_fact: 'My name is a palidrone',
            location:'NYC',
            pinpoint:'https://image.flaticon.com/icons/png/512/67/67347.png',
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
                <img src={this.state.profile_pic_url} alt="profile"></img>
                
                <div className="names">
                <h1>{this.state.first_name} {this.state.last_name}</h1>
                <h3>{this.state.fun_fact}</h3>
                </div>

                <div className="location">
                <img className="pinpoint" src={this.state.pinpoint} alt="map"></img>
                <h4>{this.state.location}</h4>
                </div>


            </div>
        )
    }
}

export default Profile;