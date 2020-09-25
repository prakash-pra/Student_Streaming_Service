import React from 'react';
import LoginFormUser from '../containers/LoginUser/LoginUser';
import AdminLogin from '../containers/AdminLogin/AdminLogin';
import UserDashboard from '../containers/UserDashboard/UserDashboard';
import AdminDashboard from '../containers/AdminDashboard/AdminDashboard';
import Toolbar from '../components/Toolbar/Toolbar';
import UserRegistration from '../containers/UserRegistration/UserRegistration';
import { Route } from 'react-router-dom';
import { Component } from 'react';
class router extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={LoginFormUser} />
        <Route exact path='/registration' component={UserRegistration} />
        <Route exact path='/administration' component={AdminLogin} />
//         <Route exact path='/admin_dashboard' component={AdminDashboard} />
         <Route exact path='/admin_dashboard/:name?' component={AdminDashboard} />


        {/* <LoginFormUser />
          </Route>
          <Route exact path='/administration'>
            <AdminLogin />
          </Route>
          <Route exact path='/registration'>
            <UserRegistration />
          </Route>
          <Route exact path='/admin_dashboard'>
            <AdminDashboard />
          </Route> */}
        {/* <Route exact path='/ap_conversion'>
              <div>
                <Toolbar />
                <div style={{ marginTop: '100px' }}></div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <SideNavbar />
                    </div>
                    <div className='col-md-8'>
                      <ApToIpConversion />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path='/remove_student'>
              <div>
                <Toolbar />
                <div style={{ marginTop: '100px' }}></div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <SideNavbar />
                    </div>
                    <div className='col-md-8'>
                      <RemoveStudent />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path='/streams'>
              <div>
                <Toolbar />
                <div style={{ marginTop: '100px' }}></div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <SideNavbar />
                    </div>
                    <div className='col-md-8'>
                      <Streams />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path='/Register'>
              <div>
                <Toolbar />
                <div style={{ marginTop: '100px' }}></div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <SideNavbar />
                    </div>
                    <div className='col-md-8'>
                      <Register />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path='/Report'>
              <div>
                <Toolbar />
                <div style={{ marginTop: '100px' }}></div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <SideNavbar />
                    </div>
                    <div className='col-md-8'>
                      <Report />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path='/Warnings'>
              <div>
                <Toolbar />
                <div style={{ marginTop: '100px' }}></div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <SideNavbar />
                    </div>
                    <div className='col-md-9'>
                      <StudentWarning />
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
                    <div className='col-md-3'>
                      <SideNavbar />
                    </div>
                    <div className='col-md-9'>
                      <SpreadSheet />
                    </div>
                  </div>
                </div>
              </div>
            </Route> */}
        {/* <Route exact path='/user_dashboard'>
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
            </div> */}
        {/* </Route> */}
      </div>
    );
  }
}

export default router;
