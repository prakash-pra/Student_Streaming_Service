import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
class Report extends Component {
  render() {
    return (
      <Aux>
        <div class='col py-3 px-lg-5 offset-md-1'>
          <h3>Summarization Reports of Lab and Class Capacity</h3>
          <hr></hr>
          <div class='input-group mb-3'>
            <input
              type='text'
              class='form-control'
              placeholder='Search table'
              aria-label='Search table'
              aria-describedby='searchSummaryReport'
            />
            <div class='input-group-append'>
              <button
                class='btn btn-primary'
                type='button'
                id='searchSummaryReport'
              >
                Search
              </button>
            </div>
          </div>
          <table class='table table-bordered table-hover'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Column 1</th>
                <th scope='col'>Column 2</th>
                <th scope='col'>Column 3</th>
                <th scope='col'>Column 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Row 1</th>
                <td>Row 1</td>
                <td>Row 1</td>
                <td>Row 1</td>
              </tr>
              <tr>
                <th scope='row'>Row 2</th>
                <td>Row 2</td>
                <td>Row 2</td>
                <td>Row 2</td>
              </tr>
              <tr>
                <th scope='row'>Row 3</th>
                <td>Row 3</td>
                <td>Row 3</td>
                <td>Row 3</td>
              </tr>
            </tbody>
          </table>
          <button
            type='button'
            class='btn weltecColor btn-lg btn-block text-white'
            data-toggle='modal'
            data-target='#modalExtractSummaryReport'
          >
            Extract
          </button>
        </div>

        <div
          class='modal fade'
          id='modalExtractSummaryReport'
          tabindex='-1'
          role='dialog'
          aria-labelledby='modalExtractSummaryReportTitle'
          aria-hidden='true'
        >
          <div class='modal-dialog modal-dialog-centered' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='modalExtractSummaryReportTitle'>
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

export default Report;
