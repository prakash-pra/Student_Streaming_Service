import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Api from '../../constants/axios';

class SpreadSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      fileName: ''
    };
    this.handleChange = this.onFileChange.bind(this);
    this.handleSubmit = this.fileUpload.bind(this);
  }
  onFileChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ fileName: event.target.files[0].name });
  };

  fileUpload = (event) => {
    event.preventDefault();

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      'spreadsheet',
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    Api.post('spreadsheet/spreadsheet.php', formData)

      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        this.setState({
          showAlert: true,
          errorMsg: error.response.data.message
        });
      });
  };
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
                    value=''
                    aria-describedby='inputGroupFileAddon01'
                    onChange={this.onFileChange}
                  />
                  <label
                    className='custom-file-label'
                    htmlFor='inputGroupFile01'
                  >
                    Choose file
                  </label>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <button
                type='button'
                className='btn btn-primary'
                onChange={this.onFileUpload}
              >
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
