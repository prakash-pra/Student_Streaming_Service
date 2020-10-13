import React, { useState } from 'react';
import Aux from '../../hoc/Auxi';
import { Modal, Button } from 'react-bootstrap';
import { Printer } from 'react-feather';

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <Aux>
        <div class='col py-3 px-lg-5'>
          <h3>Register Extraction</h3>
          <div class='input-group mb-3'>
            <input
              type='text'
              class='form-control'
              placeholder='Search table'
              aria-label='Search table'
              aria-describedby='searchRegister'
            />
            <div class='input-group-append'>
              <button class='btn btn-primary' type='button' id='searchRegister'>
                Search
              </button>
            </div>
          </div>
          <table class='table table-bordered table-hover'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>Student Name</th>
                <th scope='col'>ID Number</th>
                <th scope='col'>Course</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Student Name 1</th>
                <td>111</td>
                <td>Course 1</td>
              </tr>
              <tr>
                <th scope='row'>Student Name 2</th>
                <td>456</td>
                <td>Course 2</td>
              </tr>
              <tr>
                <th scope='row'>Student Name 3</th>
                <td>789</td>
                <td>Course 3</td>
              </tr>
            </tbody>
          </table>
          <button
            type='button'
            style={{ color: 'White', backgroundColor: '#008da5' }}
            className='btn btn-lg btn-block'
            onClick={handleShow}
          >
            Extract
          </button>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Choose extraction type.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h6>Email:</h6>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter email'
                  aria-label='Enter email'
                  aria-describedby='btnSendEmail'
                />
                <div className='input-group-append'>
                  <button
                    style={{backgroundColor: '#008da5' }}
                    className='btn text-white'
                    type='button'
                    id='btnSendEmail'
                  >
                    Send
                  </button>
                </div>
              </div>

              <center>
                <h6>OR</h6>

                <button style={{backgroundColor: '#008da5' }} type='button' className='btn text-white'>
                  <span className='text-white'><Printer size={22}/></span>
                  &nbsp;Print
                </button>
              </center>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>   
      </Aux>
    );
  };


export default Register;
