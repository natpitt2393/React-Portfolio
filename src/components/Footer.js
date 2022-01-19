import React from 'react';
import github from './images/GitHub.png'
import linkedIn from './images/LinkedIn.png'
import email from './images/email.png'

export default function Footer() {
    return (
        <div className="text-center bg-warning">
            <h1>Contact Me!</h1>
            <a
                href="https://github.com/natpitt2393"
            >
                <img src={github} alt="Nat Github" height="10%" width="10%"/>
            </a>
            <a
                href="https://www.linkedin.com/in/nat-epstein-7359b19a/"
            >
                <img src={linkedIn} alt="Nat LinkedIn" height="10%"  width="10%"/>
            </a>
            <a href="mailto:nathaniel.epstein@gmail.com">
                <img src={email} alt="Nat Email" height="10%" width="10%"></img>
            </a>


        </div>
    )
}

