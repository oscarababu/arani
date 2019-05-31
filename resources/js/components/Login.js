import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="wrapper">

                <div className="row">
                        <div className="col-lg-4 mt-5 signup-form" >
                                <div className="form-group">
                                    <label className="ml-3">Username</label>
                                    <div className="text-center">
                                        <input type='text' className='col-lg-11' />
                                    </div>
                                    
                                </div>
                                <div className="form-group">
                                    <label className="ml-3">Password</label>
                                    <div className="text-center">
                                    <input type='password' className='col-lg-11' />
                                    </div>
                                </div>

                                
                                <div className="form-group">
                                    <div className="text-center">
                                        <input type='button' value='Login' className='m-2 col-lg-11' />
                                    </div>
                                </div>
                                
                        </div>
                </div>

            </div>
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Login />, document.getElementById('home'));
}