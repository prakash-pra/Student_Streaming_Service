import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Router>
        <Layout></Layout>
      </Router>
    );
  }
}

export default App;
