import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1 className='jumbotron text-center text-primary'>Nat Epstein's Portfolio</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
