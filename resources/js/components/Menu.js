import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';


import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

export default class Menu extends PureComponent {
     render(){
        return (
            <Router>
                        <div className="mt-2 expanded-menu float-left" >
                            <div className="row">
                                <div className="menu-desc pt-3 col-md-10">
                                    <Link  to="/home">Home</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="menu-desc pt-3 col-md-10">
                                    <Link to="/dashboard">Home</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="menu-desc pt-3 col-md-10">
                                    <Link to="/reports">Home</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="menu-desc pt-3 col-md-10">
                                    <Link to="/new-item">Home</Link>
                                </div>
                            </div>
                        </div>
            </Router>
        );
        }
}




