import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DashItem extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
                    <div className="m-1 dash-item float-left" >
                        <div className="row">
                            <div className="col-lg-10 dash-item-title text-center" >
                                    <p>{this.props.transType}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 dash-item-qty text-right" >
                                <div className="row">
                                    <div className="col-lg-12 dash-item-qty-title text-right" >
                                        <p>Quantity</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 dash-item-qty-cont text-right" >
                                        <p>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 dash-item-total text-right" >
                                <div className="row">
                                    <div className="col-lg-12 dash-item-qty-title text-right" >
                                        <p>Total</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 dash-item-qty-cont text-right" >
                                        <p>999,999.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
        );
    }
}


if (document.getElementById('home')) {
    ReactDOM.render(<DashItem />, document.getElementById('home'));
}
