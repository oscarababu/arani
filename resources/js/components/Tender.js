import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


class Tender extends Component {
    
    render(){

        return (
                <div className="tender-wrapper">
                     <div className="col-lg-5 tender" >
                         <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-sm-11 p-2">
                                        <h5 className="ml-2">Tender Items</h5>
                                    </div>
                                    <div className="col-sm-1 p-2 text-right cls-pointer" onClick={this.props.hideDiv}>
                                        <img src='images/cls.png' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">

                                <div className="row form-group">
                                    <div className="col-sm-2 pt-4">
                                        <label>CASH</label>
                                    </div>
                                    <div className="col-sm-10 p-2">
                                        <input type='text' className="col-sm-11 float-left" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-sm-2 pt-4">
                                        <label>MPESA</label>
                                    </div>
                                    <div className="col-sm-10 p-2">
                                        <input type='text' className="col-sm-11 float-left" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-sm-2 pt-4">
                                        <label>CHEQUE</label>
                                    </div>
                                    <div className="col-sm-10 p-2">
                                        <input type='text' className="col-sm-11 float-left" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-sm-2 pt-4">
                                        <label>CREDIT</label>
                                    </div>
                                    <div className="col-sm-10 p-2">
                                        <input type='text' className="col-sm-11 float-left" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-sm-12 p-2">
                                        <input type='button' value='SUBMIT TENDER' className="ml-4 col-sm-11 float-left" />
                                    </div>
                                </div>

                            </div>
                         </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Tender); 
