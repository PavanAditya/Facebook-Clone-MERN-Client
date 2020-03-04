import React, { Component } from "react";
import auth from '../auth/auth';
// import { NavLink } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <div>
                Home
                <button onClick={
                    () => {
                        auth.logout(
                            () => {
                                this.props.history.push('/');
                            }
                        )
                    }
                }>Logout</button>
            </div>
        );
    }
}

export default Home;
