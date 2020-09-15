import React from 'react';
import Aux from '../../hoc/Auxi';
import { Link } from 'react-router-dom';

const sidenavbar = (props) => (
  <Aux>
    <nav class='d-none d-md-block bg-light'>
      <div class='sidebar-sticky'>
        <ul class='nav flex-column'>
          <li class='nav-item'>
            <Link class='nav-link active' to='Admin_dashboard'>
              <span data-feather='home'></span>Home
              <span class='sr-only'>(current)</span>
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/ap_conversion'>
              <span data-feather='refresh-ccw'></span>Convert AP to ID
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='remove_student'>
              <span data-feather='user-minus'></span>Removal of Student
            </Link>
          </li>
        </ul>
        <h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
          <span class='textWeltecColor'>Extraction and Report</span>
        </h6>
        <ul class='nav flex-column mb-2'>
          <li class='nav-item'>
            <Link class='nav-link' to='Streams'>
              <span data-feather='list'></span>Stream List
            </Link>
          </li>

          <li class='nav-item'>
            <a class='nav-link' href='Admin_extract_register.html'>
              <span data-feather='file-text'></span>Register
            </a>
          </li>
        </ul>

        <h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
          <span class='textWeltecColor'>Spreadsheet</span>
        </h6>
        <ul class='nav flex-column mb-2'>
          <li class='nav-item'>
            <Link class='nav-link' to='/spreadsheet'>
              <span data-feather='upload'></span>Load/Wipe Spreadsheet
            </Link>
          </li>
        </ul>

        <h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
          <span class='textWeltecColor'>Reports</span>
        </h6>
        <ul class='nav flex-column mb-2'>
          <li class='nav-item'>
            <a class='nav-link' href='Admin_summary_report.html'>
              <span data-feather='file-text'></span>Lab and Class Capacity
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='Admin_student_warnings.html'>
              <span data-feather='file-text'></span>Students with Warnings
            </a>
          </li>
        </ul>
      </div>
    </nav>

    {/* <nav className='d-none d-md-block bg-light'>
      <div className='sidebar-sticky'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <Link className='nav-link active' to='/admin_dashboard'>
              <span data-feather='home'>Home</span>
              <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='covert_ap_ip'>
              <span data-feather='file'></span>Convert AP to ID
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link'>
              <span data-feather='shopping-cart'></span>Remove Student from
              Stream
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='stream_report'>
              <span data-feather='users'></span>Extraction and Report of Stream
              List
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/registration'>
              <span data-feather='bar-chart-2'></span>Extraction of Register
            </Link>
          </li>
        </ul>

        <h6 className='px-3 mt-4 mb-1 text-muted'>
          <span>Spreadsheet</span>
        </h6>
        <ul className='nav flex-column mb-2'>
          <li className='nav-item'>
            <Link className='nav-link' to='spreadsheet'>
              <span data-feather='file-text'></span>Load/Wipe Spreadsheet
            </Link>
          </li>
        </ul>

        <h6 className='px-3 mt-4 mb-1 text-muted'>
          <span>Reports</span>
        </h6>
        <ul className='nav flex-column mb-2'>
          <li className='nav-item'>
            <Link className='nav-link' to='/lab_class_report'>
              <span data-feather='file-text'></span>Summary Report of Lab and
              Class Capacity
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/student_warning'>
              <span data-feather='file-text'></span>Students with Warnings
            </Link>
          </li>
        </ul>
      </div>
    </nav> */}
  </Aux>
);
export default sidenavbar;
