import React, { Component } from 'react';
import ToolbarUser from '../../components/Toolbar/ToolbarUser';
import StreamTable from '../StreamTable/streamTable';
import Programs from '../StreamTable/chooseCourse';
import Aux from '../../hoc/Auxi';
class UserDashboard extends Component {
  render() {
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
