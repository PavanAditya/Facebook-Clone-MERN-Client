import React, { Component } from "react";
import auth from '../auth/auth';
// import { NavLink } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <div>
                Login
                <button onClick={
                    () => {
                        auth.login(
                            () => {
                                this.props.history.push('/home');
                            }
                        )
                    }
                }>Login</button>
            </div>
        );
    }
}

export default Login;
