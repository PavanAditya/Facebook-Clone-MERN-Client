import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Login from './LoginComponent';
import { ProtectedRoute } from '../auth/ProtectedRoute';


class Main extends Component {

    render () {

        return (
            <div>
                <Header />
                <div>
                    <Switch location={this.props.location}>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <ProtectedRoute exact path="/home" component={Home} />
                        <Route path="*" component={() => "404 NOT FOUND"} />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
