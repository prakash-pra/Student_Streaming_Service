import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import LoginFormUser from '../../containers/LoginUser/LoginUser';
import AdminLogin from '../../containers/AdminLogin/AdminLogin';
import SideNavbar from '../SideNavbar/SideNavbar';
import UserDashboard from '../../containers/UserDashboard/UserDashboard';
import AdminDashboard from '../../containers/AdminDashboard/AdminDashboard';
import Toolbar from '../Toolbar/Toolbar';
import SpreadSheet from '../../containers/SpreadSheet/SpreadSheet';
import UserRegistration from '../../containers/UserRegistration/UserRegistration';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class layout extends Component {
  render() {
    return (
      <Aux>
        <Router>
          <main>
            <Switch>
              <Route exact path='/'>
                <LoginFormUser />
              </Route>
              <Route exact path='/administration'>
                <AdminLogin />
              </Route>
              <Route exact path='/registration'>
                <UserRegistration />
              </Route>
              <Route exact path='/admin_dashboard'>
                <div>
                  <Toolbar />
                  <div style={{ marginTop: '100px' }}></div>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <SideNavbar />
                      </div>
                      <div className='col-md-8'>
                        <AdminDashboard />
                      </div>
                    </div>
                  </div>
                </div>
              </Route>
              <Route exact path='/spreadsheet'>
                <div>
                  <Toolbar />
                  <div style={{ marginTop: '100px' }}></div>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <SideNavbar />
                      </div>
                      <div className='col-md-8'>
                        <SpreadSheet />
                      </div>
                    </div>
                  </div>
                </div>
              </Route>
              <Route exact path='/user_dashboard'>
                <div>
                  <Toolbar />
                  <div style={{ marginTop: '90px' }}></div>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <UserDashboard />
                      </div>
                    </div>
                  </div>
                </div>
              </Route>
            </Switch>
          </main>
        </Router>
      </Aux>
    );
  }
}

export default layout;
