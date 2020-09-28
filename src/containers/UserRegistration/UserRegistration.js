import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import { Link } from 'react-router-dom';
import Api from '../../constants/axios';

class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: '',
      firstName: '',
      lastName: '',
      email: '',
      contact: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    Api('/student/createStudent.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;'
      },
      body: this.state
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Aux>
        <div
          className='container'
          style={{ position: 'absolute', left: '12%', top: 50 }}
        >
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
                <form className='form-signin' onSubmit={this.handleSubmit}>
                  <br />
                  <div className='form-group'>
                    <label htmlFor='ap/id'>IP/AP Number</label>
                    <input
                      name='studentId'
                      type='text'
                      className='form-control'
                      value={this.state.studentId}
                      onChange={this.handleChange}
                      id='ap/id'
                    />
                  </div>

                  <div className='form-row'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='first-name'>First Name</label>
                      <input
                        name='firstName'
                        type='text'
                        className='form-control'
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        id='first-name'
                      />
                    </div>
                    <div className='form-group col-md-6'>
                      <label htmlFor='last-name'>Last Name</label>
                      <input
                        name='lastName'
                        type='text'
                        className='form-control'
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        id='last-name'
                      />
                    </div>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      name='email'
                      type='text'
                      className='form-control'
                      value={this.state.email}
                      onChange={this.handleChange}
                      id='email'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='contact-number'>Contact Number</label>
                    <input
                      name='contact'
                      type='number'
                      className='form-control'
                      value={this.state.contact}
                      onChange={this.handleChange}
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
