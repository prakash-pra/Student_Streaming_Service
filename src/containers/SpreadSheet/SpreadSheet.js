import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
class SpreadSheet extends Component {
  render() {
    return (
      <Aux>
        <div class='col py-3 px-lg-5 offset-md-1'>
          <h3>Spreadsheet</h3>
          <hr />
          <h3 class='text-info'>No spreadsheet data uploaded yet.</h3>
          <div class='alert_message col-md-8 offset-md-2'>
            <div class='file_upload_heading'>
              <h3>Choose spreadsheet file</h3>
            </div>
            <div class='file_upload'>
              <div class='input-group mb-3'>
                <div class='custom-file'>
                  <input
                    type='file'
                    class='custom-file-input'
                    id='inputGroupFile01'
                    aria-describedby='inputGroupFileAddon01'
                  />
                  <label class='custom-file-label' for='inputGroupFile01'>
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div class='mt-4'>
              <center>
                <button
                  type='button'
                  class='btn weltecColor text-white text-uppercase'
                >
                  Upload
                </button>
              </center>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SpreadSheet;
