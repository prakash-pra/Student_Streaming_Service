import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Api from '../../constants/axios';
import Aux from '../../hoc/Auxi';

const APtoIPConversion = () => {
  const [show, setShow] = useState(false);
  const [students, setStudent] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    Api.post('student/getAllStudent.php', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        // console.log(res.data.students.records);
        setStudent(res.data.students.records);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <Aux>
      <div className='col py-3 px-lg-5'>
        <h3>AP to ID Number Conversion</h3>

        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search student name'
            aria-label='Search student name'
            aria-describedby='searchStudAPID'
          />
          <div className='input-group-append'>
            <button
              className='btn btn-primary'
              type='button'
              id='searchStudAPID'
            >
              Search
            </button>
          </div>
        </div>
        <table className='table table-hover'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Student Name</th>
              <th scope='col'>AP/ID Number</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope='row'>
                    {value.firstName} {value.lastName}
                  </th>
                  <td>{value.studentId}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      type='button'
                      onClick={handleShow}
                    >
                      Convert
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Convert AP to ID Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='form-group'>
              <label htmlFor='apNum' className='col-form-label'>
                AP Number
              </label>
              <input type='text' className='form-control' />
            </div>
            <div className='form-group'>
              <label htmlFor='idNum' className='col-form-label'>
                ID Number
              </label>
              <input type='text' className='form-control' />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Convert
          </Button>
        </Modal.Footer>
      </Modal>
    </Aux>
  );
};

export default APtoIPConversion;
