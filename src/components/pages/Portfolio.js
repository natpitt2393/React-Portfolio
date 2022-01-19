import React from 'react'
import EAC from '../images/MAINEAC.png';
import dayPlanner from '../images/MAINDAY.png';
import MHT from '../images/LOGINMHT.png';
import quiz from '../images/Screenshot-Index.png';
import socialNetworkAPI from '../images/MONGODB1.png';

export default function Portfolio() {
    return(
        <div className="text-center">
             <h1>Portfolio</h1>
        <p>This is my portfolio!</p>


        <a
          href="https://mental-health-tracker-ne.herokuapp.com/">Mental Health Tracker Deployed
        </a>
        <br>
        </br>
        <a href="https://github.com/natpitt2393/Mental-Health-Tracker">Mental Health Tracker Github</a>
        <br></br>
        <img src={MHT} alt="mental health tracker" width="40%" height="40%"></img>
        <p>An app that allows you to create diary entries 
            <br></br>
            with different choices for mood input. 
            <br></br>
            After creating different diary entries you can see your mental health progress over time!</p>
            <a
          href="https://natpitt2393.github.io/Everyone-s-A-Critic/">Everyone's A Critic Deployed
        </a>
        <br>
        </br>
        <a href="https://github.com/natpitt2393/Everyone-s-A-Critic#everyones-a-critic">Everyone's A Critic Github</a>
        <br></br>
        <img src={EAC} alt="Everyone's A Critic" width="40%" height="40%"></img>


        
        </div>
    )
}