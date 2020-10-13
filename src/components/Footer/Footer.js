import React from 'react';
import './Footer.css';
const footer = (props) => {
  return (
    <footer
      className='mt-auto py-3'
      style={{
        backgroundColor: '#1f9ed9',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
      }}
    >
      <div className='container'>
        <div className='row'>
          <span className='text-white'>&copy; NPPN 2020</span>
        </div>
      </div>
    </footer>
  );
};
export default footer;
