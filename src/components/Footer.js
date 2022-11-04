import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="footer">
        <div className="text-center">
            <a
                href="https://github.com/natpitt2393"
            >
                <i className="fa fa-github fa-4x">
                    <FontAwesomeIcon icon={faGithub} />
                </i>
            </a>
            <a
                href="https://www.linkedin.com/in/nathaniel-epstein-7359b19a/"
            >
                <i className="fa fa-linkedin fa-4x">
                    <FontAwesomeIcon icon={faLinkedin} />
                </i>
                
            </a>
            <a href="mailto:nathaniel.epstein@gmail.com">
            <i className="fa fa-envelope fa-4x"><FontAwesomeIcon icon={faEnvelope} />
                </i>
            </a>
        </div>
        </footer>
    )
}

