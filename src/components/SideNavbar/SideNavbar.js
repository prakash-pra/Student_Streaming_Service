import React from 'react';

const sidenavbar = (props) => (
  <div>
    <ul className='nav flex-column'>
      <li className='nav-item'>
        <a className='nav-link active' href='active'>
          Active
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='link'>
          Link
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='link1'>
          Link
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link disabled' href='link2'>
          Disabled
        </a>
      </li>
    </ul>
  </div>
);
export default sidenavbar;
