import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DashItem from './DashItem';

export default class Dashboard extends Component {
   
    render() {
        
        return (

            <div>

                    <div className="row">
                        <div className="col-lg-12 mt-1 pt-2 items-search" >
                            <div className="row">
                                <div className="col-lg-11 float-right"><p>Admin / Dashboard </p></div>
                                <div className="col-lg-1 float-right"><img src="images/search.png" /></div>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="row">
            
                        <DashItem transType='CASH'  />
                        <DashItem transType='MPESA' />
                        <DashItem transType='CHEQUE' />
                        <DashItem transType='ACCOUNT' />
                        <DashItem transType='CARD' />
                        <DashItem transType='TOATL' />
                        
                    </div>
            </div>
                    
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Dashboard />, document.getElementById('home'));
}
