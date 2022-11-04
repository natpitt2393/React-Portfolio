import React from 'react'
import EAC from '../images/MAINEAC.png';
import dayPlanner from '../images/MAINDAY.png';
import MHT from '../images/LOGINMHT.png';
import quiz from '../images/Screenshot-Index.png';
import Card from 'react-bootstrap/Card';


export default function Portfolio() {
    return (
        <div className=" portfolio text-center bg-danger">
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
            <br></br>
            <a
                href="https://natpitt2393.github.io/Everyone-s-A-Critic/">Everyone's A Critic Deployed
            </a>
            <br>
            </br>
            <a href="https://github.com/natpitt2393/Everyone-s-A-Critic#everyones-a-critic">Everyone's A Critic Github</a>
            <br></br>
            <img src={EAC} alt="Everyone's A Critic" width="40%" height="40%"></img>
            <p>A website that allows movie buffs and amateurs alike to look up movies they love or want to see.
                <br></br>
                After finding some bare bone facts about the movie,
                <br></br>
                the user can then decide to look up the New York Times review of that movie.</p>
            <br></br>
            <a href="https://natpitt2393.github.io/A-Quiz-About-The-Sopranos/">A Quiz About the Sopranos Deployed</a>
            <br></br>
            <a href="https://github.com/natpitt2393/A-Quiz-About-The-Sopranos">A Quiz About the Sopranos Github</a>
            <br></br>
            <img src={quiz} alt="sopranos quiz" width="40%" height="40%"></img>
            <br></br>
            <p>A quiz built through Javascript about New Jersey's favorite and most infamous crime family!</p>
            <br></br>
            <a href="https://natpitt2393.github.io/Nat-Epstein-Day-Planner/">Day Planner Deployed</a>
            <br></br>
            <a href="https://github.com/natpitt2393/Nat-Epstein-Day-Planner">Day Planner Github</a>
            <br></br>
            <img src={dayPlanner} alt="day planner" width="30%" height="30%"></img>
            <br></br>
            <p>This website enables users to keep track of their busy lives by entering in descriptions for what they have to do each hour. </p>
        </div>
    )
}