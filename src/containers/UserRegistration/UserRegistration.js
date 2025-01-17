import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import { Link } from 'react-router-dom';
import Api from '../../constants/axios';
const validEmailRegex = RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: '',
      firstName: '',
      lastName: '',
      email: '',
      errors: {
        studentId: '',
        firstName: '',
        lastName: '',
        email: '',
        formErrorMsg: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearForm() {
    this.setState({
      studentId: '',
      firstName: '',
      lastName: '',
      email: ''
    });
  }
  handleChange(event) {
    let { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'studentId':
        if (value.length === 0) {
          errors.studentId = 'Student ID/AP must no be empty!';
        } else if (value.length < 5) {
          errors.studentId =
            'Student ID/AP must be at least 6 characters long!';
        } else {
          errors.studentId = '';
        }
        break;
      case 'firstName':
        if (value.length === 0) {
          errors.firstName = 'First Name must no be empty!';
        } else {
          errors.firstName = '';
        }
        break;
      case 'lastName':
        if (value.length === 0) {
          errors.lastName = 'Last Name must no be empty!';
        } else {
          errors.lastName = '';
        }
        break;
      case 'email':
        if (value.length === 0) {
          errors.email = 'Email must no be empty!';
        } else if (!validEmailRegex.test(value)) {
          errors.email = 'Email is not valid!';
        } else {
          errors.email = '';
        }
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info('Valid Form');
      Api.post('student/createStudent.php', JSON.stringify(this.state), {
        headers: {
          'Content-Type': 'text/plain'
        }
      })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          this.props.history.push('/');
          this.clearForm();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { errors } = this.state;
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
                  style={{ backgroundColor: '#008da5' }}
                >
                  <center>
                    <img
                      src={require('../../assets/Images/officialLogo.png')}
                      alt='weltec'
                      width='190'
                    />
                  </center>
                </div>
                <form
                  className='form-signin'
                  onSubmit={this.handleSubmit}
                  noValidate
                >
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
                      noValidate
                    />
                    {errors.studentId.length > 0 && (
                      <span className='text-danger'>{errors.studentId}</span>
                    )}
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
                        noValidate
                      />
                      {errors.firstName.length > 0 && (
                        <span className='text-danger'>{errors.firstName}</span>
                      )}
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
                      {errors.lastName.length > 0 && (
                        <span className='text-danger'>{errors.lastName}</span>
                      )}
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
                    {errors.email.length > 0 && (
                      <span className='text-danger'>{errors.email}</span>
                    )}
                  </div>
                  <button
                    style={{backgroundColor: '#008da5'}}
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
