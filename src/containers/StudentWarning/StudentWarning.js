import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
class StudentWarning extends Component {
  render() {
    return (
      <Aux>
        <div class='col py-3 px-lg-5 offset-md-1'>
          <h3>Students with Warnings</h3>
          <hr></hr>
          <div class='input-group mb-3'>
            <input
              type='text'
              class='form-control'
              placeholder='Search table'
              aria-label='Search table'
              aria-describedby='searchStudWarning'
            />
            <div class='input-group-append'>
              <button
                class='btn weltecColor text-white'
                type='button'
                id='searchStudWarning'
              >
                Search
              </button>
            </div>
          </div>
          <table class='table table-bordered table-hover'>
            <thead class='thead-dark'>
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
            class='btn weltecColor btn-lg btn-block text-white'
            data-toggle='modal'
            data-target='#modalExtractStudWarning'
          >
            Extract
          </button>
        </div>

        <div
          class='modal fade'
          id='modalExtractStudWarning'
          tabindex='-1'
          role='dialog'
          aria-labelledby='modalExtractStudWarningTitle'
          aria-hidden='true'
        >
          <div class='modal-dialog modal-dialog-centered' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='modalExtractStudWarningTitle'>
                  Choose extraction type.
                </h5>
                <button
                  type='button'
                  class='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div class='modal-body'>
                <h6>Email:</h6>
                <div class='input-group mb-3'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Enter email'
                    aria-label='Enter email'
                    aria-describedby='btnSendEmail'
                  />
                  <div class='input-group-append'>
                    <button
                      class='btn weltecColor text-white'
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
                    class='btn btn-lg weltecColor text-white'
                  >
                    <span class='text-white' data-feather='printer'></span>
                    &nbsp;Print
                  </button>
                </center>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn btn-secondary'
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
