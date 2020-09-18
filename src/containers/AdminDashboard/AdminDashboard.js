import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import Home from '../../containers/AdminHome/AdminHome';

class AdminDashboard extends Component {
  render() {
    return (
      <Aux>
        <div>
          <Toolbar />
          <div style={{ marginTop: '100px' }}></div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col' style={{ padding: '0px' }}>
                <SideNavbar />
              </div>
              <div className='col-md-9'>
                <Home />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h1>section one</h1>
          </div>
          <div className='col-md-4'>
            <h1>section one</h1>
          </div>
          <div className='col-md-4'>
            <h1>section one</h1>
          </div>
        </div>
    </div>*/}
      </Aux>
    );
  }
}

export default AdminDashboard;
