import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import APConversion from '../APtoIPConversion/ApToIpConversion';
import RemoveStudent from '../RemoveStudent/RemoveStudent';
import Streams from '../Streams/Streams';
import Register from '../Register/Register';
import Spreadsheet from '../SpreadSheet/SpreadSheet';
import Report from '../ReportSummary/ReportSummary';
import Warnings from '../StudentWarning/StudentWarning';
import Home from '../../containers/AdminHome/AdminHome';

class AdminDashboard extends Component {
  renderSwitch = () => {
    let params = this.props.match.params.name;
    console.log(params);
    switch (params) {
      case 'ap_conversion':
        return <APConversion />;

      case 'remove_student':
        return <RemoveStudent />;

      case 'Streams':
        return <Streams />;

      case 'Register':
        return <Register />;

      case 'spreadsheet':
        return <Spreadsheet />;

      case 'Report':
        return <Report />;

      case 'Warnings':
        return <Warnings />;

      default:
        return <Home />;
    }
  };
  render() {
    console.log(this.props);
    return (
      <Aux>
        <div>
          <Toolbar />
          <div className='container-fluid' style={{ marginTop: '100px' }}>
            <div className='row'>
              <div className='col-md-3'>
                <SideNavbar />
              </div>
              <div className='col-md-8'>{this.renderSwitch()}</div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default AdminDashboard;
