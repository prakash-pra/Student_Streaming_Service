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
      <div className='container-fluid' style={{ marginBottom: '25px' }}>
        <br /><br /><br /><br /><br />
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                <div className="col-md-8 offset-md-2">
                  <div className="card">
                    <h5 style={{ backgroundColor: '#008da5' }} className="card-header text-white">
                      Welcome : Student Name
                    </h5>
                    <div className="card-body">
                      <h5 className="card-text">Date: {this.state.date}</h5>
                    
                    <h5 className="card-text">Programs:</h5>
                    <div className="input-group">
                      <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>Select program...</option>
                        <option value="1">NZCIT</option>
                        <option value="2">NZDPIT</option>
                        <option value="3">BIT</option>
                        <option value="3">BIT GDIPIT</option>
                        <option value="3">BIT GDIPIT GDIPCybersec</option>
                      </select>
                      <div className="input-group-append">
                        <button 
                          style={{ backgroundColor: '#008da5' }} 
                          className="btn btn-outline-secondary text-white weltecColor" 
                          type="button">
                          GO
                        </button>
                      </div>
                      </div>
                    </div>
                  </div>        
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
