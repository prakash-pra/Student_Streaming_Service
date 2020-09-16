import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';

class APtoIPConversion extends Component {
  render() {
    return (
      <Aux>
        <div class='col py-3 px-lg-5 offset-md-1'>
          <h3>AP to ID Number Conversion</h3>

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
                <th scope='col'>AP Number</th>
                <th scope='col'>ID Number</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Student Name 1</th>
                <td>111</td>
                <td></td>
                <td>
                  <button
                    class='btn weltecColor text-white'
                    type='button'
                    data-toggle='modal'
                    data-target='#convertModal'
                    id='convertAPID'
                  >
                    Convert
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>Student Name 2</th>
                <td>Converted</td>
                <td>111</td>
                <td>
                  <span class='' id='convertAPID'>
                    None
                  </span>
                </td>
              </tr>
              <tr>
                <th scope='row'>Student Name 3</th>
                <td>123</td>
                <td></td>
                <td>
                  <button
                    class='btn weltecColor text-white'
                    type='button'
                    data-toggle='modal'
                    data-target='#convertModal'
                    id='convertAPID'
                  >
                    Convert
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Modal to convert ap to id */}
        <div
          classNames='modal fade'
          id='convertModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='exampleModalLabel'>
                  Convert AP to ID Number
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
                <form>
                  <div class='form-group'>
                    <label for='apNum' class='col-form-label'>
                      AP Number
                    </label>
                    <input type='text' class='form-control' id='apNum' />
                  </div>
                  <div class='form-group'>
                    <label for='idNum' class='col-form-label'>
                      ID Number
                    </label>
                    <input type='text' class='form-control' id='idNum' />
                  </div>
                </form>
              </div>
              <div class='modal-footer'>
                <button
                  type='button'
                  class='btn bg-danger text-white'
                  data-dismiss='modal'
                >
                  Cancel
                </button>
                <button type='button' class='btn btn-primary'>
                  Convert
                </button>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default APtoIPConversion;
