import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SignUp extends Component {
    render() {
        return (
                <div className="wrapper">

                
                    <div className="row">
                            <div className="col-lg-7 mt-5 pr-2 signup-form" >
                            <div className="row">
                                <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className='m-2'>First Name</label>
                                            <input type='text' className='m-2 col-lg-12' />
                                        </div>
                                        <div className="form-group">
                                            <label className='m-2'>Last Name</label>
                                            <input type='text' className='m-2 col-lg-12' />
                                        </div>
                                        <div className="form-group">
                                            <label className='m-2'>Email</label>
                                            <input type='text' className='m-2 col-lg-12' />
                                        </div>

                                        <div className="form-group">
                                            <label className='m-2'>Phone</label>
                                            <input type='text' className='m-2 col-lg-12' />
                                        </div>

                                       
                                </div>

                                <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className='m-2'>Password</label>
                                            <input type='password' className='m-2 col-lg-11' />
                                        </div>
                                        <div className="form-group">
                                            <label className='m-2'>Confirm Password</label>
                                            <input type='password' className='m-2 col-lg-11' />
                                        </div>

                                        <div className="form-group">
                                        
                                            <input type='button' value='Login' className='mr-4 col-lg-7 float-right' />
                                        </div>
                                </div>
                                    

                              </div>      
                                    
                                    
                            </div>
                    </div>
            </div>
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<SignUp />, document.getElementById('home'));
}