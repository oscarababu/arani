import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import NewItem from './NewItem';
import Reports from './Reports';
import Dashboard from './Dashboard';


import {BrowserRouter as Router, NavLink, Route, withRouter, Switch} from 'react-router-dom';

export default class Layout extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }
      render(){

            const currLoc = window.location.pathname;

        return (
            <Router>

                    <div className="mt-2 side-menu float-left" onMouseEnter={this.toggleHidden.bind(this)} onMouseLeave={this.toggleHidden.bind(this)}>
                        {   
                            currLoc == '/arani-pos/home' || currLoc ==  '/arani-pos/' ? 

                                <div>
                                    <div className="row">
                                            <NavLink className="icons" id="home-icon" activeStyle={{
                                                'borderRight':'1px solid #044476',
                                                'backgroundImage':"url('images/home-black.png')",
                                                'backgroundRepeat':'no-repeat',
                                                'backgroundPosition':'center'
                                                }} to="/arani-pos/home">
                                                </NavLink>
                                    </div>
                                    <div className="row">
                                            <NavLink className="icons" id="dash-icon" activeStyle={{
                                                'borderRight':'1px solid #044476',
                                                'backgroundImage':"url('images/dash-black.png')",
                                                'backgroundRepeat':'no-repeat',
                                                'backgroundPosition':'center'
                                                }} to="/arani-pos/dashboard">
                                            </NavLink>
                                    </div>
                                    <div className="row">
                                        <NavLink className="icons" id="txns-icon" activeStyle={{
                                                'borderRight':'1px solid #044476',
                                                'backgroundImage':"url('images/txns-black.png')",
                                                'backgroundRepeat':'no-repeat',
                                                'backgroundPosition':'center'
                                                }} to="/arani-pos/reports">
                                        </NavLink>
                                    </div>
                                    <div className="row">
                                        <NavLink className="icons" id="settings-icon" activeStyle={{
                                                'borderRight':'1px solid #044476',
                                                'backgroundImage':"url('images/settings-black.png')",
                                                'backgroundRepeat':'no-repeat',
                                                'backgroundPosition':'center'
                                                }} to="/arani-pos/new-item">
                                        </NavLink>
                                    </div>
                                    
                                    {!this.state.isHidden && 
                                    
                                    <div className="mt-2 expanded-menu float-left" >
                                        <div className="row">
                                                <NavLink activeStyle={{'fontWeight':'bold'}} className="menu-desc pt-3 col-md-10" to="/arani-pos/home">Home</NavLink>
                                        </div>
                                        <div className="row">
                                                <NavLink activeStyle={{'fontWeight':'bold'}} className="menu-desc pt-3 col-md-10" to="/arani-pos/dashboard">Dashboard</NavLink>
                                        </div>
                                        <div className="row">
                                                <NavLink activeStyle={{'fontWeight':'bold'}} className="menu-desc pt-3 col-md-10" to="/arani-pos/reports">Reports</NavLink>
                                        </div>
                                        <div className="row">
                                                <NavLink activeStyle={{'fontWeight':'bold'}} className="menu-desc pt-3 col-md-10" to="/arani-pos/new-item">New Item</NavLink>
                                        </div>
                                        
                                    </div>
                                    
                                    }
                                </div>

                                
                            :

                                    
                            <div>
                                    <div className="row">
                                            <NavLink className="icons" id="home-icon" activeStyle={{
                                                'borderRight':'1px solid #044476',
                                                'backgroundImage':"url('images/home-black.png')",
                                                'backgroundRepeat':'no-repeat',
                                                'backgroundPosition':'center'
                                                }} to="/arani-pos/home">
                                                </NavLink>
                                    </div>
                                    <div className="row">
                                            <NavLink className="icons" id="dash-icon" activeStyle={{
                                                'borderRight':'1px solid #044476',
                                                'backgroundImage':"url('images/dash-black.png')",
                                                'backgroundRepeat':'no-repeat',
                                                'backgroundPosition':'center'
                                                }} to="/arani-pos/dashboard">
                                            </NavLink>
                                    </div>
                                    <div className="row">
                                        <NavLink className="icons" id="txns-icon" activeStyle={{
                                                'borderRight':'1px solid #044476',
                                                'backgroundImage':"url('images/txns-black.png')",
                                                'backgroundRepeat':'no-repeat',
                                                'backgroundPosition':'center'
                                                }} to="/arani-pos/reports">
                                        </NavLink>
                                    </div>
                                    <div className="row">
                                        <NavLink className="icons" id="settings-icon" activeStyle={{
                                                'borderRight':'1px solid #044476',
                                                'backgroundImage':"url('images/settings-black.png')",
                                                'backgroundRepeat':'no-repeat',
                                                'backgroundPosition':'center'
                                                }} to="/arani-pos/new-item">
                                        </NavLink>
                                    </div>
                                    
                                    {!this.state.isHidden && 
                                    
                                    <div className="mt-2 expanded-menu float-left" >
                                        <div className="row">
                                                <NavLink activeStyle={{'fontWeight':'bold'}} className="menu-desc pt-3 col-md-10" to="/arani-pos/home">Home</NavLink>
                                        </div>
                                        <div className="row">
                                                <NavLink activeStyle={{'fontWeight':'bold'}} className="menu-desc pt-3 col-md-10" to="/arani-pos/dashboard">Dashboard</NavLink>
                                        </div>
                                        <div className="row">
                                                <NavLink activeStyle={{'fontWeight':'bold'}} className="menu-desc pt-3 col-md-10" to="/arani-pos/reports">Reports</NavLink>
                                        </div>
                                        <div className="row">
                                                <NavLink activeStyle={{'fontWeight':'bold'}} className="menu-desc pt-3 col-md-10" to="/arani-pos/new-item">New Item</NavLink>
                                        </div>
                                        
                                    </div>
                                    
                                    }
                                </div>


                        }
                            
                        </div>
                    <Switch>
                        <Route path="/arani-pos/" exact component={Home} />
                        <Route path="/arani-pos/login" exact component={Login} />
                        <Route path="/arani-pos/sign-up" exact component={SignUp} />
                        <Route path="/arani-pos/home" exact component={Home} />
                        {/** <Route path="/dashboard" exact render={(props)=><Dashboard pageType='admin'/>} /> */}
                        <Route path="/arani-pos/dashboard" exact component={Dashboard} />
                        <Route path="/arani-pos/reports" exact component={Reports} />
                        <Route path="/arani-pos/new-item" exact component={NewItem} />
                    </Switch> 
            </Router>
        );
        }
}

