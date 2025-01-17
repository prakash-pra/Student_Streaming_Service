import React, { Component } from 'react';
import Api from '../../constants/axios';
export default class streamTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spreadsheet: []
    };
  }

  spreadsheetData = (data) => {
    let spreadsheetObj = [];
    for (let i = 0; i < data.length; i++) {
      let obj = {
        courseName: data[i].courseName,
        program: data[i].program,
        campus: data[i].campus,
        credit: data[i].credit,
        stream: data[i].stream,
        tutor: data[i].tutor,
        monday: data[i].monday,
        tuesday: data[i].tuesday,
        wednesday: data[i].wednesday,
        thursday: data[i].thursday,
        friday: data[i].friday
      };
      spreadsheetObj.push(Object.assign({}, obj));
    }
    this.setState({ spreadsheet: spreadsheetObj });
  };

  componentDidMount() {
    Api.get('spreadsheet/getSpreadsheetData.php', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        console.log(res.data.spreadsheet.records);
        this.spreadsheetData(res.data.spreadsheet.records);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  render() {
    return (
      <div className='container-fluid' style={{ marginTop: '40px' }}>
        <div className='row'>
          <div className='col' style={{ marginTop: '25px' }}>
            <table className='table table-bordered'>
              <thead className='bg-light text-dark'>
                <tr>
                  <th scope='col'>Courses</th>
                  <th scope='col'>Monday</th>
                  <th scope='col'>Tuesday</th>
                  <th scope='col'>Wednesday</th>
                  <th scope='col'>Thursday</th>
                  <th scope='col'>Friday</th>
                </tr>
              </thead>
              <tbody>
                {this.state.spreadsheet.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <ul style={{ listStyle: 'none' }}>
                          <li>{value.courseName}</li>
                          <li>
                            <b>{value.tutor}</b>
                          </li>
                          <li>{value.campus}</li>
                          <li>Program: {value.program}</li>
                          <li>Credit : {value.credit}</li>
                        </ul>
                      </td>
                      <td>
                        <ul style={{ listStyle: 'none' }}>
                          <li>{value.monday}</li>
                          {value.monday !== '' ? (
                            <li>
                              <label
                                className='form-check-label'
                                htmlFor='confirm-course'
                              ></label>
                              <input
                                type='checkbox'
                                name='checkbox'
                                id='confirm-course'
                                value='15'
                              />
                            </li>
                          ) : (
                            ''
                          )}
                        </ul>
                      </td>
                      <td>
                        <ul style={{ listStyle: 'none' }}>
                          <li>{value.tuesday}</li>
                          {value.tuesday !== '' ? (
                            <li>
                              <label
                                className='form-check-label'
                                htmlFor='confirm-course'
                              ></label>
                              <input
                                type='checkbox'
                                name='checkbox'
                                id='confirm-course'
                                value='15'
                              />
                            </li>
                          ) : (
                            ''
                          )}
                        </ul>
                      </td>
                      <td>
                        <ul style={{ listStyle: 'none' }}>
                          <li>{value.wednesday}</li>
                          {value.wednesday !== '' ? (
                            <li>
                              <label
                                className='form-check-label'
                                htmlFor='confirm-course'
                              ></label>
                              <input
                                type='checkbox'
                                name='checkbox'
                                id='confirm-course'
                                value='15'
                              />
                            </li>
                          ) : (
                            ''
                          )}
                        </ul>
                      </td>
                      <td>
                        <ul style={{ listStyle: 'none' }}>
                          <li>{value.thursday}</li>
                          {value.thursday !== '' ? (
                            <li>
                              <label
                                className='form-check-label'
                                htmlFor='confirm-course'
                              ></label>
                              <input
                                type='checkbox'
                                name='checkbox'
                                id='confirm-course'
                                value='15'
                              />
                            </li>
                          ) : (
                            ''
                          )}
                        </ul>
                      </td>
                      <td>
                        <ul style={{ listStyle: 'none' }}>
                          <li>{value.friday}</li>
                          {value.friday !== '' ? (
                            <li>
                              <label
                                className='form-check-label'
                                htmlFor='confirm-course'
                              ></label>
                              <input
                                type='checkbox'
                                name='checkbox'
                                id='confirm-course'
                                value='15'
                              />
                            </li>
                          ) : (
                            ''
                          )}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
