import React from 'react';
import LoginFormUser from '../containers/LoginUser/LoginUser';
import AdminLogin from '../containers/AdminLogin/AdminLogin';
import AdminDashboard from '../containers/AdminDashboard/AdminDashboard';
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
        <Route
          exact
          path='/admin_dashboard/:name?'
          component={AdminDashboard}
        />
      </div>
    );
  }
}

export default router;
