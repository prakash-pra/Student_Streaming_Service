import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ApModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
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
  );
};
export default ApModal;
