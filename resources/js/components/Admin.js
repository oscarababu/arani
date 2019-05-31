import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


export default class Admin extends Component {
    render() {
        return (
            <div className="row">

                <div className="mt-2 side-menu float-left" >
                        <div className="row">
                            <div className="icons">
                                <img src="/images/reports.png" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="icons">
                                <img src="/images/reports.png" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="icons">
                                <img src="/images/reports.png" />
                            </div>
                        </div>
                </div>

                <div className="col-lg-11 ml-1 mt-2 items-tray float-left" >
                    <div className="row">
                        <div className="col-lg-12 mt-1 items-search" >
                            <div className="row">
                                <div className="col-lg-11 float-right"><p>Admin / Dashboard</p></div>
                                <div className="col-lg-1 float-right"><img src="/images/search.png" /></div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 pr-1 mt-1 items-table-tray" >
                            <table>
                                <thead>
                                    <tr><th>Date</th><th>Code</th><th>Item</th><th>Qty</th><th>Price</th><th></th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>12/2/2018</td><td>4323</td><td>Ball</td><td>1</td><td>200</td></tr>
                                    <tr><td>12/2/2018</td><td>4323</td><td>longridge junior challenger cadet golf package set (8 year plus)</td><td>1</td><td>200</td></tr>
                                    <tr><td>12/2/2018</td><td>4323</td><td>Ball</td><td>1</td><td>200</td></tr>
                                    <tr><td>12/2/2018</td><td>4323</td><td>Ball</td><td>1</td><td>200</td></tr>
                                    <tr><td>12/2/2018</td><td>4323</td><td>Ball</td><td>1</td><td>200</td></tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                        
                </div>

            </div>
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Admin />, document.getElementById('home'));
}
