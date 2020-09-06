import React from 'react';
import Aux from '../../hoc/Auxi';
import LoginFormUser from '../../containers/LoginUser/LoginUser';
import AdminLogin from '../../containers/AdminLogin/AdminLogin';
import SideNavbar from '../SideNavbar/SideNavbar';
import AdminDashboard from '../../containers/AdminDashboard/AdminDashboard';
import Toolbar from '../Toolbar/Toolbar';
import UserRegistration from '../../containers/UserRegistration/UserRegistration';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const layout = (props) => (
  <Aux>
    <Router>
      <main style={{ marginBottom: '30px' }}>
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
          <Route exact path='/dashboard'>
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
        </Switch>
      </main>
    </Router>
    <Footer></Footer>
  </Aux>
);

export default layout;
