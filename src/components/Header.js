import React from 'react';
import Nav from './Nav';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <h1 className='jumbotron text-center text-primary'>Nat Epstein's Portfolio</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}