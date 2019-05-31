import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch, NavLink } from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';

export default class Top extends Component {

    render(){

        const currLoc = window.location.pathname;

        return (
            <Router>

            <div className="row">
                        <div className="col-lg-12 top-menu" >
                            {
                                currLoc == "/login" || currLoc == "/sign-up" ?

                                <div className="col-lg-12 top-menu" >
                                        <div className="col-md-1 mr-2 link float-left" >
                                            <p>Logo</p>
                                        </div>
                                        
                                        <NavLink className="col-md-1 mr-2 link float-right" activeClassName='active-menu' to="/sign-up">
                                            Sign Up 
                                        </NavLink>
                                        

                                        <NavLink className="col-md-1 mr-2 link float-right" activeClassName='active-menu' to="/login">
                                            Login
                                        </NavLink>
                                        
                                </div>

                                :

                                <div className="col-lg-12 top-menu" >
                                        <div className="col-md-1 mr-2 link float-left" >
                                            <p>Logo</p>
                                        </div>
                                        
                                        <div className="col-md-1 mr-2 link float-right" >
                                            <img src="/images/menu.png" />
                                        </div>
                                        <div className="col-md-1 mr-2 link float-right" >
                                            <div className="profile-pic"></div>
                                        </div>
                                        <div className="col-md-2 mr-2 link float-right" >
                                            <p>o.ababu</p>
                                        </div>
                                </div>
                                
                            }
    
                        </div>
            </div>  
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/sign-up" exact component={SignUp} />
            </Switch>  
            </Router>  
        );
}
}
