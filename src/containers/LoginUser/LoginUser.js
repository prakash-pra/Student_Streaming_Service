import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';

class loginUser extends Component {
  render() {
    return (
      <Aux>
        <div
          className='card'
          style={{
            width: '33.33%',
            marginLeft: '33%',
            border: 'none',
            marginTop: '100px'
          }}
        >
          <div
            className='card-header'
            style={{ backgroundColor: '#1f9ed9', textAlign: 'center' }}
          >
            <img
              src={require('../../assets/Images/weltec-logo.svg')}
              alt='weltec'
              width='170'
            />
          </div>
          <form className='form-signin'>
            <br />
            <h1 className='h3 mb-3 font-weight-normal'>
              Welcome, please sign in
            </h1>
            <div className='form-group'>
              <label htmlFor='ap/id'>AP/ID Number</label>
              <input type='text' className='form-control' id='ap/id' />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='email'
                aria-describedby='emailHelp'
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
                Not register yet ? <a href='register'>Register Now</a>
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
