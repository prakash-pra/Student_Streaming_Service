import React from 'react';
import Aux from '../../hoc/Auxi';
import { Link } from 'react-router-dom';

const sidenavbar = (props) => (
  <Aux>
    <nav class='d-none d-md-block bg-light'>
      <div class='sidebar-sticky'>
        <ul class='nav flex-column'>
          <li class='nav-item'>
            <Link class='nav-link active' to='/home'>
              <span data-feather='home'>Home</span>
              <span class='sr-only'>(current)</span>
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='covert_ap_ip'>
              <span data-feather='file'></span>Convert AP to ID
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link'>
              <span data-feather='shopping-cart'></span>Remove Student from
              Stream
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='stream_report'>
              <span data-feather='users'></span>Extraction and Report of Stream
              List
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/registration'>
              <span data-feather='bar-chart-2'></span>Extraction of Register
            </Link>
          </li>
        </ul>

        <h6 class='px-3 mt-4 mb-1 text-muted'>
          <span>Spreadsheet</span>
        </h6>
        <ul class='nav flex-column mb-2'>
          <li class='nav-item'>
            <Link class='nav-link' to='load_wipe_spreadsheet'>
              <span data-feather='file-text'></span>Load/Wipe Spreadsheet
            </Link>
          </li>
        </ul>

        <h6 class='px-3 mt-4 mb-1 text-muted'>
          <span>Reports</span>
        </h6>
        <ul class='nav flex-column mb-2'>
          <li class='nav-item'>
            <Link class='nav-link' to='/lab_class_report'>
              <span data-feather='file-text'></span>Summary Report of Lab and
              Class Capacity
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/student_warning'>
              <span data-feather='file-text'></span>Students with Warnings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </Aux>
);
export default sidenavbar;
