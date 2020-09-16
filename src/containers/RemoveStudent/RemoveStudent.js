import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
class RemoveStudent extends Component {
  render() {
    return (
      <Aux>
        <div class='col py-3 px-lg-5 offset-md-1'>
          <h3>Removal of Student from Course</h3>
          <hr></hr>
          <div class='input-group mb-3'>
            <input
              type='text'
              class='form-control'
              placeholder='Search student name'
              aria-label='Search student name'
              aria-describedby='searchStudAPID'
            />
            <div class='input-group-append'>
              <button class='btn btn-primary' type='button' id='searchStudAPID'>
                Search
              </button>
            </div>
          </div>
          <table class='table table-hover'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Student Name</th>
                <th scope='col'>ID Number</th>
                <th scope='col'>Course</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Student Name 1</th>
                <td>111</td>
                <td>Stream 1a</td>
                <td>
                  <button
                    class='btn bg-danger text-white'
                    type='button'
                    data-toggle='modal'
                    data-target='#removeModal'
                    id='removeStudent'
                  >
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>Student Name 2</th>
                <td>123</td>
                <td>Stream 1b</td>
                <td>
                  <button
                    class='btn bg-danger text-white'
                    type='button'
                    data-toggle='modal'
                    data-target='#removeModal'
                    id='removeStudent'
                  >
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>Student Name 3</th>
                <td>345</td>
                <td>Stream 2a</td>
                <td>
                  <button
                    class='btn bg-danger text-white'
                    type='button'
                    data-toggle='modal'
                    data-target='#removeModal'
                    id='removeStudent'
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Modal to remove student from stream */}
        <div
          class='modal fade'
          id='removeModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='exampleModalLabel'>
                  Remove Student
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
                <span>
                  Are you sure to remove this Student(s) from the Stream?
                </span>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn bg-danger text-white'
                  data-dismiss='modal'
                >
                  Cancel
                </button>
                <button type='button' class='btn weltecColor text-white'>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default RemoveStudent;
