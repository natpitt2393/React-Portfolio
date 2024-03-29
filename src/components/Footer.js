import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';


export default function Footer() {
    return (
        <footer className="footer py-5">
        <div className="d-flex justify-content-around">
            <div className='icons'>
            <a
                href="https://github.com/natpitt2393"
            >
                <i className="fa fa-github fa-4x" style={{'marginLeft': "10px"}}>
                    <FontAwesomeIcon icon={faGithub} />
                </i>
            </a>
            <a
                href="https://www.linkedin.com/in/nathaniel-epstein-7359b19a/"
            >
                <i className="fa fa-linkedin fa-4x" style={{'marginLeft': "10px"}}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </i>
                
            </a>
            <a href="mailto:nathaniel.epstein@gmail.com">
            <i className="fa fa-envelope fa-4x" style={{'marginLeft': "10px"}}><FontAwesomeIcon icon={faEnvelope} />
                </i>
            </a>
            </div>
        </div>
        </footer>
    )
}

