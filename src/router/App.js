import React, {Component} from 'react';
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom';


import Home from '../containers/home/home'
import Page from '../containers/pageContent/pageContent'


class Routers extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Switch>
                    <Route path="/Home" component={Home}>
                    </Route>
                    <Route path="/pageContent" component={Page}>
                    </Route>
                    <Redirect from="/" to="/Home"></Redirect>
                </Switch>
            </Router>
        )
    }
}

export default Routers