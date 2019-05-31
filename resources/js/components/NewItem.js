import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


export default class NewItem extends Component {
    render() {
        return (

            <div>

                    <div className="row">
                        <div className="col-lg-12 mt-1 pt-2 items-search" >
                            <div className="row">
                                <div className="col-lg-11 mt-2 float-right"><p>Admin / New Item</p></div>
                                
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                                <div className="form-group">
                                    <label className='m-2'>Title</label>
                                    <input type='text' className='m-2 col-lg-12' />
                                </div>
                                <div className="form-group">
                                    <label className='m-2'>Code</label>
                                    <input type='text' className='m-2 col-lg-12' />
                                </div>
                                <div className="form-group">
                                    <label className='m-2'>Cost</label>
                                    <input type='text' className='m-2 col-lg-12' />
                                </div>

                                <div className="form-group">
                                    <label className='m-2'>Price</label>
                                    <input type='text' className='m-2 col-lg-12' />
                                </div> 
                        </div>

                        <div className="col-lg-6">
                                <div className="form-group">
                                    <label className='m-2'>Category</label>
                                    <input type='text' className='m-2 col-lg-11' />
                                </div>
                                <div className="form-group">
                                    <label className='m-2'>Sub Category</label>
                                    <input type='text' className='m-2 col-lg-11' />
                                </div>
                                <div className="form-group">
                                    <label className='m-2'>Image</label>
                                    <input type='text' className='m-2 col-lg-11' />
                                </div>

                                <div className="form-group">
                                
                                    <input type='button' value='Save Item' className='mr-5 col-lg-4 float-right' />
                                </div>
                        </div>
            </div>

            </div>
            
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<NewItem />, document.getElementById('home'));
}
