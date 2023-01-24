import React from 'react';
import './Nav.css';
import Navbar from 'react-bootstrap/Navbar';


export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div className='hero'>
      <Navbar className='justify-content-center'>
      <nav className='d-flex justify-content-between'>
    <ul className="nav nav-tabs py-1">
      <li className="nav-item">
        <a
          href="#about-me"
          onClick={() => handlePageChange('AboutMe')}
          
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
         
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
    </ul>
    </nav>
    </ Navbar >
    </div>
  );
}


