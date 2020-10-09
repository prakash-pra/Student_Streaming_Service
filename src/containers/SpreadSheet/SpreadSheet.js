import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
class SpreadSheet extends Component {
  render() {
    return (
      <Aux>
        <div className='col py-3 px-lg-5 offset-md-1'>
          <h3>Spreadsheet</h3>
          <hr />
          <h3 className='text-info'>No spreadsheet data uploaded yet.</h3>
          <div className='alert_message col-md-8 offset-md-2'>
            <div className='file_upload_heading'>
              <h3>Choose spreadsheet file</h3>
            </div>
            <div className='file_upload'>
              <div className='input-group mb-3'>
                <div className='custom-file'>
                  <input
                    type='file'
                    className='custom-file-input'
                    id='inputGroupFile01'
                    aria-describedby='inputGroupFileAddon01'
                  />
                  <label className='custom-file-label' for='inputGroupFile01'>
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <button type='button' className='btn btn-primary'>
                Upload
              </button>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SpreadSheet;
