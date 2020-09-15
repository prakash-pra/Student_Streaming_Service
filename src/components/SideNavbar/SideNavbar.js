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
            <Link class='nav-link' to='/Register'>
              <span data-feather='file-text'></span>Register
            </Link>
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
  </Aux>
);
export default sidenavbar;
