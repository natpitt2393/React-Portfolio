import React from 'react';
import Nav from './Nav';


export default function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <h1 className='jumbotron text-center'>Nat Epstein</h1>

            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}