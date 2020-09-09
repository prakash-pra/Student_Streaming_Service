import React, { Component } from 'react';

class UserDashboard extends Component {
  render() {
    return (
      <div className='container-fluid' style={{ marginBottom: '25px' }}>
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
                <tr>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>Security Testing and NetWork Defence</li>
                      <li>
                        <b>Paul Bryant</b>
                      </li>
                      <li>Weltec</li>
                      <li>IA7308</li>
                      <li>Credit : 15</li>
                    </ul>
                  </td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>(11am - 1pm) - B101 - Lecture - IA7308</li>
                      <li>
                        <label
                          className='form-check-label'
                          for='confirm-course'
                        >
                          <b>Select Stream : </b>
                        </label>
                        <input
                          type='checkbox'
                          name='checkbox'
                          id='confirm-course'
                          value='15'
                        />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>(10am - 1pm) - B202 - Lecture - IA7308</li>
                      <li>
                        <label
                          className='form-check-label'
                          for='confirm-course'
                        >
                          <b>Select Stream : </b>
                        </label>
                        <input
                          type='checkbox'
                          name='checkbox'
                          id='confirm-course'
                          value='15'
                        />
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>IA7307 Criptography and Security Mechanisms</li>
                      <li>
                        <b>Manish Singh</b>
                      </li>
                      <li>Credit : 15</li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <b>Credit : </b>15
                      </li>
                      <li>
                        <b>Time : </b>11am - 1pm
                      </li>
                      <li>
                        <b>Lecture : </b>B108
                      </li>
                      <li>
                        <label
                          className='form-check-label'
                          for='confirm-course'
                        >
                          <b>Select Stream : </b>
                        </label>
                        <input
                          type='checkbox'
                          name='checkbox'
                          id='confirm-course'
                          value='15'
                        />
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <b>Credit : </b>15
                      </li>
                      <li>
                        <b>Time : </b>10am - 12pm
                      </li>
                      <li>
                        <b>Lab : </b>B207
                      </li>
                      <li>
                        <label
                          className='form-check-label'
                          for='confirm-course'
                        >
                          <b>Select Stream : </b>
                        </label>
                        <input
                          type='checkbox'
                          name='checkbox'
                          id='confirm-course'
                          value='15'
                        />
                      </li>
                    </ul>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>IT7502 Digital Ethics</li>
                      <li>
                        <b>Dr. Steve Mckinlay</b>
                      </li>
                      <li>Credit : 15</li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <b>Time : </b>1pm - 3pm
                      </li>
                      <li>
                        <b>Lab/Lecture : </b>C303
                      </li>
                      <li>
                        <label
                          className='form-check-label'
                          for='confirm-course'
                        >
                          <b>Select Stream : </b>
                        </label>
                        <input
                          type='checkbox'
                          name='checkbox'
                          id='confirm-course'
                          value='15'
                        />
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>CS7506 Cloud Security</li>
                      <li>
                        <b>Dr. Dax Roberts</b>
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <b>Time : </b>1pm - 2pm
                      </li>
                      <li>
                        <b>Lecture : </b>C117
                      </li>
                      <li>
                        <label
                          className='form-check-label'
                          for='confirm-course'
                        >
                          <b>Select Stream : </b>
                        </label>
                        <input
                          type='checkbox'
                          name='checkbox'
                          id='confirm-course'
                          value='15'
                        />
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>SD7502 Intelligent System Devlopment</li>
                      <li>
                        <b>Dr. Waqar Khan</b>
                      </li>
                      <li>Credit : 15</li>
                    </ul>
                  </td>
                  <td></td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <b>Time : </b>8am - 9am
                      </li>
                      <li>
                        <b>Lecture : </b>C117
                      </li>
                      <hr />
                      <li>
                        <b>Time : </b>8am - 9am
                      </li>
                      <li>
                        <b>Lab : </b>B108
                      </li>

                      <li>
                        <label
                          className='form-check-label'
                          for='confirm-course'
                        >
                          <b>Select Stream : </b>
                        </label>
                        <input
                          type='checkbox'
                          name='checkbox'
                          id='confirm-course'
                          value='15'
                        />
                      </li>
                    </ul>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>
                        <b>Time : </b>8am - 11am
                      </li>
                      <li>
                        <b>Lab : </b>B108
                      </li>
                      <li>
                        <label
                          className='form-check-label'
                          for='confirm-course'
                        >
                          <b>Select Stream : </b>
                        </label>
                        <input
                          type='checkbox'
                          name='checkbox'
                          id='confirm-course'
                          value='15'
                          onclick='checkCredit()'
                        />
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
