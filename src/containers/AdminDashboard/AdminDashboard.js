import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import Home from '../../containers/AdminHome/AdminHome';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mypath: ''
    };
    this.handleUrl = this.handleUrl.bind(this);
  }
  handleUrl({ newPath }) {
    this.setState({ mypath: newPath });
    // this.state.sidebarurl = newPath;
  }
  render() {
    return (
      <Aux>
        <div>
          <Toolbar />
          <div className='container-fluid' style={{ marginTop: '60px' }}>
            <div className='row'>
              <div className='col-md-3'>
                <SideNavbar
                  url={this.props.match.path}
                  getUrl={this.handleUrl}
                />
              </div>
              <div className='col-md-9'>
                <Home />
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default AdminDashboard;
