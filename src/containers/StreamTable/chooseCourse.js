import React, { Component } from 'react';

export default class chooseCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString().split(',')[0]
    };
  }
  render() {
    return (
      <div style={{ marginTop: '120px' }}>
        <div className='card' style={{ width: '35.33%', marginLeft: ' 32%' }}>
          <h5
            className='card-header text-white'
            style={{ backgroundColor: '#1f9ed9' }}
          >
            Welcome : Student Name
          </h5>
          <div className='card-body'>
            <h5 className='card-text'>Date: {this.state.date}</h5>
          </div>
        </div>
        <div className='container' style={{ marginTop: '20px' }}>
          <div className='row justify-content-center'>
            <div className='col-6'>
              <h5>Programs:</h5>
              <div className='input-group'>
                <select
                  className='custom-select'
                  id='inputGroupSelect04'
                  aria-label='Example select with button addon'
                >
                  <option selected>Select program...</option>
                  <option value='1'>Bachelor in IT</option>
                  <option value='2'>Grad Dip in IT</option>
                  <option value='3'>Grad Dip in Cyber</option>
                </select>
                <div className='input-group-append'>
                  <button
                    className='btn btn-primary text-white ml-4'
                    type='button'
                  >
                    GO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
