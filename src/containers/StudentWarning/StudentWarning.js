import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
class StudentWarning extends Component {
  render() {
    return (
      <Aux>
        <div className='col py-3 px-lg-5 offset-md-1'>
          <h3>Students with Warnings</h3>
          <hr></hr>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Search table'
              aria-label='Search table'
              aria-describedby='searchStudWarning'
            />
            <div className='input-group-append'>
              <button
                className='btn btn-primary'
                type='button'
                id='searchStudWarning'
              >
                Search
              </button>
            </div>
          </div>
          <table className='table table-bordered table-hover'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Student Name</th>
                <th scope='col'>ID Number</th>
                <th scope='col'>Course</th>
                <th scope='col'>Warning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Student Name 1</th>
                <td>111</td>
                <td>Course 1</td>
                <td>Warning 1</td>
              </tr>
              <tr>
                <th scope='row'>Student Name 2</th>
                <td>456</td>
                <td>Course 2</td>
                <td>Warning 2</td>
              </tr>
              <tr>
                <th scope='row'>Student Name 3</th>
                <td>789</td>
                <td>Course 3</td>
                <td>Warning 3</td>
              </tr>
            </tbody>
          </table>
          <button
            type='button'
            className='btn weltecColor btn-lg btn-block text-white'
            data-toggle='modal'
            data-target='#modalExtractStudWarning'
          >
            Extract
          </button>
        </div>

        <div
          className='modal fade'
          id='modalExtractStudWarning'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='modalExtractStudWarningTitle'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='modalExtractStudWarningTitle'>
                  Choose extraction type.
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <h6>Email:</h6>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter email'
                    aria-label='Enter email'
                    aria-describedby='btnSendEmail'
                  />
                  <div className='input-group-append'>
                    <button
                      className='btn weltecColor text-white'
                      type='button'
                      id='btnSendEmail'
                    >
                      Send
                    </button>
                  </div>
                </div>

                <center>
                  <h6>OR</h6>

                  <button
                    type='button'
                    className='btn btn-lg weltecColor text-white'
                  >
                    <span className='text-white' data-feather='printer'></span>
                    &nbsp;Print
                  </button>
                </center>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default StudentWarning;
