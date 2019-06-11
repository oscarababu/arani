import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';
import Top from './components/Top';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);



export default class Index extends Component {

    render() {
        const currLoc = window.location.pathname;

        return (
   
                    <div className="container-fluid">
                            <Top/>
                            { currLoc =="/arani-pos/sign-up" || currLoc =="/arani-pos/login" ? 
                                <div></div>
                                :
                                <Layout/>
                            }
                            
                           
                    </div>
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('home'));
}
