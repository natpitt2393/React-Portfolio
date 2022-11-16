import React from 'react';
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Project(props) {
    return (
        <div className='project '>
           <Card>
            <Card.Img src={props.img} style={{width: "30%", height: "30%", alignSelf: "center"}} />
            <Card.Body>
                <Card.Title>{props.name} </Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>
                    <a href={props.github}>
                        <i className="fa fa-github fa-4x">
                    <FontAwesomeIcon icon={faGithub} />
                </i>
                </a>
                    
                </Card.Text>
                <Card.Text>
                    <a href={props.deployedURL}>
                        <i className="fa-solid fa-arrow-right fa-4x">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </i>
                    </a>
                </Card.Text>
            </Card.Body>
            </Card> 
        </div>
    )
}