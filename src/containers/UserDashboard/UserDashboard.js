import React, { Component } from 'react';
import ToolbarUser from '../../components/Toolbar/ToolbarUser';
import StreamTable from '../StreamTable/streamTable';
import Programs from '../StreamTable/chooseCourse';
import Aux from '../../hoc/Auxi';
import { Redirect } from 'react-router-dom';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('jwt');
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to='/' />;
    }
    return (
      <Aux>
        <ToolbarUser />
        <Programs />
        <StreamTable />
      </Aux>
    );
  }
}

export default UserDashboard;
