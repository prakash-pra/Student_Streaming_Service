import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Api from '../../constants/axios';
import { Alert } from 'react-bootstrap';

class SpreadSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      fileName: '',
      successMsg: '',
      showAlert: false
    };
    this.handleChange = this.onFileChange.bind(this);
    this.handleSubmit = this.onFileUpload.bind(this);
  }
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ fileName: event.target.files[0].name });
  };

  onFileUpload = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append(
      'spreadsheet',
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    Api.post('spreadsheet/spreadsheet.php', formData)

      .then((res) => {
        console.log(res.data);
        this.setState({
          successMsg: res.data.message,
          showAlert: true,
          fileName: ''
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Aux>
        <div className='col py-3 px-lg-5 offset-md-1'>
          <h3>Spreadsheet</h3>
          <hr />
          <Alert
            show={this.state.showAlert}
            variant='success'
            onClose={() => this.setState({ showAlert: false })}
            dismissible
          >
            <span>{this.state.successMsg}</span>
          </Alert>
          {/* <h3 className='text-info'>No spreadsheet data uploaded yet.</h3> */}
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
                    onChange={this.onFileChange}
                  />
                  {this.state.fileName === '' ? (
                    <label
                      className='custom-file-label'
                      htmlFor='inputGroupFile01'
                    >
                      Choose file
                    </label>
                  ) : (
                    <label
                      className='custom-file-label'
                      htmlFor='inputGroupFile01'
                    >
                      {this.state.fileName}
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={this.onFileUpload}
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
