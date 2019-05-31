import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Tender from './Tender';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenderIsHidden: false
        }
      }
    clkTenderBtn(){
  
        this.setState({
            tenderIsHidden: !this.state.tenderIsHidden
          });
          
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12" >
                <div className="col-lg-6 mt-2 items-tray float-left" >
                    <div className="row">
                        <div className="col-lg-12 mt-1 items-search" >
                            <input type='text' placeholder='Search Item' className='col-lg-12' />
                        </div>
                    </div>
                    <div className="row pr-3">
                        <div className="col-lg-12 mt-1 items-table-tray" >
                            <table>
                                <thead>
                                    <tr><th></th><th>Code</th><th>Item</th><th>Qty</th><th>Price</th><th></th></tr>
                                </thead>
                                <tbody>
                                    <tr><td><img src="/images/shopping-bag.png" /></td><td>4323</td><td>Ball</td><td>1</td><td>200</td></tr>
                                    <tr><td><img src="/images/shopping-bag.png" /></td><td>4323</td><td>longridge junior challenger cadet golf package set (8 year plus)</td><td>1</td><td>200</td></tr>
                                    <tr><td><img src="/images/shopping-bag.png" /></td><td>4323</td><td>Ball</td><td>1</td><td>200</td></tr>
                                    <tr><td><img src="/images/shopping-bag.png" /></td><td>4323</td><td>Ball</td><td>1</td><td>200</td></tr>
                                    <tr><td><img src="/images/shopping-bag.png" /></td><td>4323</td><td>Ball</td><td>1</td><td>200</td></tr>
                            
                                </tbody>
                                
                                
                            </table>
                        </div>
                    </div>
                        
                </div>

                

                <div className="col-lg-6  mt-2 totals-tray float-left" >
                    <div className="row">
                        <div className="col-lg-2 mt-1 items-search" >
                            <input type='button' value='New' className='col-lg-12' />
                        </div>
                        <div className="col-lg-10 mt-1 items-search" >
                            <input type='text' placeholder='Search Customer' className='col-lg-12' />
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mt-1 tender-tray" >
                            <table>
                                <thead>
                                    <tr><th>Code</th><th>Item</th><th>Qty</th><th>Price</th><th>Total</th><th></th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>4323</td><td>Ball</td><td>1</td><td>200</td><td>200</td><td><a href=''><img src='/images/cls.png' /></a></td></tr>
                                    <tr><td>4323</td><td>longridge junior challenger cadet golf package set (8 year plus)</td><td>1</td><td>200</td><td>200</td><td><a href=''><img src='/images/cls.png' /></a></td></tr>
                                    <tr><td>4323</td><td>Ball</td><td>1</td><td>200</td><td>200</td><td><a href=''><img src='/images/cls.png' /></a></td></tr>
                                    <tr><td>4323</td><td>Ball</td><td>1</td><td>200</td><td>200</td><td><a href=''><img src='/images/cls.png' /></a></td></tr>
                                    <tr><td>4323</td><td>Ball</td><td>1</td><td>200</td><td>200</td><td><a href=''><img src='/images/cls.png' /></a></td></tr>
                            
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mt-1 tender-btn" onClick={this.props.showDiv}>
                            <div className='col-lg-12 tender-button' >

                                <div className='col-lg-4 tender-label-wrap float-right' >
                                    <div className="row mt-2">
                                        <div className='col-lg-12 total-label text-right'>
                                            <b>Total</b>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className='col-lg-12 text-right'>
                                            <h4>500,000.00</h4>
                                        </div>
                                    </div>
                                </div> 

                                <div className='divider float-right'></div>

                                <div className='col-lg-4 tender-label-wrap float-right' >
                                    <div className="row mt-2">
                                        <div className='col-lg-12 total-label text-right'>
                                            <b>Tax</b>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className='col-lg-12 text-right'>
                                            <h4>1,500.00</h4>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='divider float-right'></div>



                                <div className='col-lg-3 tender-label-wrap float-right mr-2' >
                                    <div className="row mt-2">
                                        <div className='col-lg-12 total-label float-right text-right'>
                                            <b>Quantity</b>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className='col-lg-12 float-right text-right'>
                                            <h4>500</h4>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>

                {
                    !this.props.isHidden && <Tender />
                }

            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        isHidden:state.isHidden
    }
}

const mapDispatchToProps = (dispach) => {
    return {
        showDiv:()=> dispach({
            type:'SHOW_TENDER'
        }),
        hideDiv:()=> dispach({
            type:'HIDE_TENDER'
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);    
