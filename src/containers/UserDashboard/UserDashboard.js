import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import StreamTable from '../StreamTable/streamTable';
import Programs from '../StreamTable/chooseCourse';
import Aux from '../../hoc/Auxi';
class UserDashboard extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <Programs />
        <StreamTable />
      </Aux>
    );
  }
}

export default UserDashboard;
