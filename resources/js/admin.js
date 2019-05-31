import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import NewItem from './components/NewItem';



export default class Admin extends Component {
    constructor(){
        super();

        this.state = {
            loggedIn:true
        };
    }
    render() {
        return (
            <div>

                <Router>
                    <div className="container-fluid">

                            {
                                this.state.loggedIn ===false ? 
                                    <div className="row">
                                            <div className="col-lg-12 top-menu" >
                                                    <div className="col-md-1 mr-2 link float-left" >
                                                        <p>Logo</p>
                                                    </div>
                                                    <div className="col-md-1 mr-2 login-link float-right" >
                                                        <Link to="/sign-up">Sign Up</Link>
                                                    </div>
                                                    <div className="col-md-1 mr-2 login-link float-right" >
                                                        <Link to="/login">Login</Link>
                                                    </div>
                                            </div>
                                    </div>

                            : 

                            <div>

                                <div className="row">
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
                                </div>


                            
                                    <div className="mt-2 side-menu float-left" >
                                        <div className="row">
                                            <div className="icons">
                                                <Link to="/home"><img src="/images/reports.png" /></Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="icons">
                                                <Link to="/dashboard"><img src="/images/reports.png" /></Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="icons">
                                                <Link to="/reports"><img src="/images/reports.png" /></Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="icons">
                                                <Link to="/new-item"><img src="/images/reports.png" /></Link>
                                            </div>
                                        </div>
                                    </div>

                                
                            </div>

                            }
                        
                             
                             <Route path="/home" exact component={Home} />
                             <Route path="/reports" exact component={Reports} />
                             <Route path="/new-item" exact component={NewItem} />
                             
            
                        
                    </div>

                </Router>

            </div>
            
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Admin />, document.getElementById('home'));
}
