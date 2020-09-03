import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';

class AdminLogin extends Component {
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
            <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
            <div className='form-group'>
              <label htmlFor='ap/id'>Username</label>
              <input type='text' className='form-control' />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Password</label>
              <input
                type='email'
                className='form-control'
                aria-describedby='emailHelp'
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
