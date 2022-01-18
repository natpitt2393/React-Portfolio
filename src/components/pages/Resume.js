import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import resume from '../assets/NHERESUME.pdf';

export default function Resume() {
    return (
        <div>
            <div className='text-center'>
            <p>
                Download my{" "}
                <a className="resume" href={resume} download>
                    resume
                </a>
                !
            </p>
            </div>
            <table className="table text-center mt-5">
                <thead>
                    <tr>
                        <th scope="col">Frontend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">React.js</th>
                    </tr>
                    <tr>
                        <th scope="row">HTML5</th>
                    </tr>
                    <tr>
                        <th scope="row">CSS3</th>
                    </tr>
                    <tr>
                        <th scope="row">Bootstrap</th>
                    </tr>
                    <tr>
                        <th scope="row">Javascript</th>
                    </tr>
                </tbody>
            </table>

            <table className="table text-center mt-5">
                <thead>
                    <tr>
                        <th scope="col">Backend</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Node.js</th>
                    </tr>
                    <tr>
                        <th scope="row">MySql/Sequelize</th>
                    </tr>
                    <tr>
                        <th scope="row">MongoDB/Mongoose</th>
                    </tr>
                    <tr>
                        <th scope="row">Express.js</th>
                    </tr>
                    <tr>
                        <th scope="row">GraphQL</th>
                    </tr>
                    <tr>
                        <th scope="row">RESTful APIs</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}







