import React from 'react';
import Card from "react-bootstrap/Card";


export default function Project(props) {
    return (
        <div className='project'>
           <Card>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                {/* <Card.Img>{props.img}</Card.Img> */}
                <Card.Text>
                    <a href={props.github}>Github</a>
                </Card.Text>
                <Card.Text>
                    <a href={props.deployedURL}>Deployed</a>
                </Card.Text>
            </Card.Body>
            </Card> 
        </div>
    )
}