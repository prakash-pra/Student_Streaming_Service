import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Aux from '../../hoc/Auxi';

const APtoIPConversion = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Aux>
      <div class='col py-3 px-lg-5 offset-md-1'>
        <h3>AP to ID Number Conversion</h3>

        <div class='input-group mb-3'>
          <input
            type='text'
            class='form-control'
            placeholder='Search student name'
            aria-label='Search student name'
            aria-describedby='searchStudAPID'
          />
          <div class='input-group-append'>
            <button class='btn btn-primary' type='button' id='searchStudAPID'>
              Search
            </button>
          </div>
        </div>
        <table class='table table-hover'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>Student Name</th>
              <th scope='col'>AP Number</th>
              <th scope='col'>ID Number</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>Student Name 1</th>
              <td>111</td>
              <td></td>
              <td>
                <button
                  class='btn btn-danger'
                  type='button'
                  onClick={handleShow}
                >
                  Convert
                </button>
              </td>
            </tr>
            <tr>
              <th scope='row'>Student Name 2</th>
              <td>Converted</td>
              <td>111</td>
              <td>
                <span class='' id='convertAPID'>
                  None
                </span>
              </td>
            </tr>
            <tr>
              <th scope='row'>Student Name 3</th>
              <td>123</td>
              <td></td>
              <td>
                <button
                  class='btn btn-danger'
                  type='button'
                  onClick={handleShow}
                >
                  Convert
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Convert AP to ID Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class='form-group'>
              <label for='apNum' class='col-form-label'>
                AP Number
              </label>
              <input type='text' class='form-control' />
            </div>
            <div class='form-group'>
              <label for='idNum' class='col-form-label'>
                ID Number
              </label>
              <input type='text' class='form-control' />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Aux>
  );
};

export default APtoIPConversion;
