import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Router from '../../Router/router';
class layout extends Component {
  render() {
    return (
      <Aux>
        <Router></Router>
      </Aux>
    );
  }
}

export default layout;
