import React, { useState} from 'react';
import ToolbarUser from '../../components/Toolbar/ToolbarUser';
import { Modal, Button } from 'react-bootstrap';
import Aux from '../../hoc/Auxi';

const UserProfile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <Aux>
        <ToolbarUser />
        <br /><br /><br /><br /><br /><br /><br />
        <div className="container" >
	      <div className="row">
	        <div className="col-md-12">
	          <h3>Profile Details</h3>
	          <hr />
	        </div>
	        <div className="col-md-12">
	          <form>
	            <div className="form-group row">
	              <div className="col-md-12">
	                <label for="inputEmail3"><b>Email</b></label>
	                <input
	                  type="email"
	                  className="form-control"
	                  id="inputEmail3"
	                  placeholder=""
	                />
	              </div>
	            </div>
	            <div className="form-group row">
	              <div className="col-md-6 mb-3">
	                <label for="validationCustom01"><b>First name</b></label>
	                <input
	                  type="text"
	                  className="form-control"
	                  id="validationCustom01"
	                  placeholder="First name"
	                  required
	                />
	              </div>
	              <div className="col-md-6 mb-3">
	                <label for="validationCustom02"><b>Surname</b></label>
	                <input
	                  type="text"
	                  className="form-control"
	                  id="validationCustom02"
	                  placeholder="Surname"
	                  required
	                />
	              </div>
	            </div>           
	            <label for="inputEmail3"><b>AP/ID Number</b></label>
	            <div className="form-group row">
	              <div className="input-group col-md-6">
	                
	                <input
	                  type="text"
	                  className="form-control"
	                  id="inputEmail3"
	                  placeholder="AP/ID number"
	                />
	                <div className="input-group-append">
	                  <button style={{ backgroundColor: '#008da5' }} className="btn text-white" type="button" id="userConvert"
	                  onClick={handleShow}>Convert</button>
	                </div>
	              </div>
	            </div>
	          </form>
	        </div>
	      </div>
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
	          <Button style={{ backgroundColor: '#008da5' }} className='text-white' onClick={handleClose}>
	            Convert
	          </Button>
	        </Modal.Footer>
	     </Modal>
      </Aux>
    );
  };


export default UserProfile;
