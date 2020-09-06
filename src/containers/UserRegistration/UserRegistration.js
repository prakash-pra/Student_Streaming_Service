import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import { Link } from 'react-router-dom';

class UserRegistration extends Component {
  render() {
    return (
      <Aux>
        <div className='container' style={{ marginTop: '65px' }}>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <div className='card' style={{ border: 'none' }}>
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
                  <div className='form-group'>
                    <label htmlFor='ap/id'>IP/AP Number</label>
                    <input type='text' className='form-control' id='ap/id' />
                  </div>

                  <div className='form-row'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='first-name'>First Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='first-name'
                      />
                    </div>
                    <div className='form-group col-md-6'>
                      <label htmlFor='last-name'>Last Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='last-name'
                      />
                    </div>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' className='form-control' id='email' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='contact-number'>Contact Number</label>
                    <input
                      type='number'
                      className='form-control'
                      id='contact-number'
                    />
                  </div>

                  <button
                    className='text-white btn btn-primary btn-lg btn-block'
                    type='submit'
                  >
                    Register
                  </button>
                  <div className='text-center mt-4'>
                    <p
                      style={{
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        fontWeight: '500'
                      }}
                    >
                      Already have an account ? <Link to='/'>Sign In</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default UserRegistration;
