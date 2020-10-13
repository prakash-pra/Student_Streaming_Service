import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Api from '../../constants/axios';
import { Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
class AdminLogin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('jwt');
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: '',
      adminpassword: '',
      errorMsg: '',
      showAlert: false,
      loggedIn
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    Api.post('login/adminLogin.php', JSON.stringify(this.state), {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
      .then((res) => {
        console.log(res.data.jwt);
        localStorage.setItem('jwt', res.data.jwt);
        const token = localStorage.getItem('jwt');
        if (token) {
          this.setState({ loggedIn: true });
        }
      })
      .catch((error) => {
        this.setState({
          showAlert: true,
          errorMsg: error.response.data.message
        });
      });
  }
  render() {
    if (this.state.loggedIn) {
      console.log('render');
      return <Redirect to='/admin_dashboard/' />;
    }
    return (
      <Aux>
        <div
          className='card'
          style={{
            width: '33.33%',
            marginLeft: '33%',
            border: 'none',
            position: 'absolute',
            top: 100
          }}
        >
          <div className='card-header' style={{ backgroundColor: '#008da5' }}>
            <img
              src={require('../../assets/Images/officialLogo.png')}
              alt='weltec'
              width='190'
            />
          </div>
          <br />
          <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
          <Alert
            show={this.state.showAlert}
            variant='danger'
            onClose={() => this.setState({ showAlert: false })}
            dismissible
          >
            <span>{this.state.errorMsg}</span>
          </Alert>
          <form className='form-signin' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='ap/id'>Username</label>
              <input
                type='text'
                name='username'
                className='form-control'
                value={this.state.studentId}
                onChange={this.handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='pasword'
                name='adminpassword'
                className='form-control'
                value={this.state.studentId}
                onChange={this.handleChange}
              />
            </div>
            <button
              className='text-white btn btn-primary btn-lg btn-block'
              type='submit'
            >
              Sign in
            </button>
          </form>
        </div>
      </Aux>
    );
  }
}

export default AdminLogin;
