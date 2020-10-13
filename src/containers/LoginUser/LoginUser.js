import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Api from '../../constants/axios';
import { Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
class loginUser extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('jwt');
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      studentId: '',
      email: '',
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
    Api.post('login/userLogin.php', JSON.stringify(this.state), {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
      .then((res) => {
        localStorage.setItem('jwt', res.data.jwt);
        this.setState({ loggedIn: true });
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
      return <Redirect to='/user_dashboard' />;
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
            <center>
              <img
                src={require('../../assets/Images/officialLogo.png')}
                alt='weltec'
                width='190'
              />
            </center>
          </div>
          <form className='form-signin' onSubmit={this.handleSubmit}>
            <br />
            <h1 className='h3 mb-3 font-weight-normal'>
              Welcome, please sign in
            </h1>
            <Alert
              show={this.state.showAlert}
              variant='danger'
              onClose={() => this.setState({ showAlert: false })}
              dismissible
            >
              <span>{this.state.errorMsg}</span>
            </Alert>
            <div className='form-group'>
              <label htmlFor='ap/id'>AP/ID Number</label>
              <input
                type='text'
                name='studentId'
                className='form-control'
                value={this.state.studentId}
                onChange={this.handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <button
              style={{ backgroundColor: '#008da5' }}
              className='text-white btn btn-lg btn-block'
              type='submit'
            >
              Sign in
            </button>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p
                className='text-muted'
                style={{
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Not register yet ? <Link to='/registration'>Register Now</Link>
              </p>
            </div>
            <br />
            <div className='mb-3' style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                or
              </p>
              <Link
                className='text-decoration-none'
                style={{
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
                to='/user_dashboard/'
              >
                Continue as guest
              </Link>
            </div>
          </form>
        </div>
      </Aux>
    );
  }
}

export default loginUser;
