import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import { Link } from 'react-router-dom';
import Api from '../../constants/axios';
import { Alert } from 'react-bootstrap';
class loginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: '',
      email: '',
      errorMsg: '',
      showAlert: false
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
        // console.log(res);
        // console.log(res.data);
        localStorage.setItem('jwt', res.data.jwt);
      })
      .catch((error) => {
        // console.log(error.response.data.message);
        this.setState({
          showAlert: true,
          errorMsg: error.response.data.message
        });
      });
  }
  render() {
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
              className='text-white btn btn-primary btn-lg btn-block'
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
              <a
                href='home'
                className='text-decoration-none'
                style={{
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}
              >
                Continue as guest
              </a>
            </div>
          </form>
        </div>
      </Aux>
    );
  }
}

export default loginUser;
