import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import NewItem from './NewItem';
import Reports from './Reports';
import Dashboard from './Dashboard';


import {BrowserRouter as Router, Link, Route, withRouter, Switch} from 'react-router-dom';

export default class RoutesComp extends PureComponent {
        render(){

        return (
            <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/sign-up" exact component={SignUp} />
                        <Route path="/home" exact component={Home} />
                        {/** <Route path="/dashboard" exact render={(props)=><Dashboard pageType='admin'/>} /> */}
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/reports" exact component={Reports} />
                        <Route path="/new-item" exact component={NewItem} />
                    </Switch> 
            </Router>
        );
        }
}

