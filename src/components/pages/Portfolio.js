import React from 'react';
import EAC from '../images/MAINEAC.png';
import dayPlanner from '../images/MAINDAY.png';
import MHT from '../images/LOGINMHT.png';
import quiz from '../images/Screenshot-Index.png';
import Projects from '/pages/Projects';



export default function Portfolio() {
        const Projects= [{
            id: 1,
            projectName: "Everyone's A Critic",
            description: "A website that allows movie buffs and amateurs alike to look up movies they love or want to see. After finding some bare bone facts about the movie, the user can then decide to look up the New York Times review of that movie.",
            deployedURL: "https://natpitt2393.github.io/Everyone-s-A-Critic/",
            github: "https://github.com/natpitt2393/Everyone-s-A-Critic#everyones-a-critic",
            img: EAC
        },
            {
                id: 2,
                projectName: "Mental Health Tracker",
                description: "An app that allows you to create diary entries with different choices for mood input.After creating different diary entries you can see your mental health progress over time!",
                deployedURL: "https://mental-health-tracker-ne.herokuapp.com/",
                github: "https://github.com/natpitt2393/Mental-Health-Tracker",
                img: MHT
            }
        ];

        function createProjectCard(projectCard) {
            return (
                <Projects 
                key={projectCard.id}
                name={projectCard.projectName}
                description={projectCard.description}
                deployedURL={projectCard.deployedURL}
                github={projectCard.github}
                img={projectCard.img}
                />
            )
        };

        return (
            <div className="Portfolio">
               <h1>Projects</h1> 
                <div>
                   {Projects.map(createProjectCard)} 
                </div>
            </div>
        )


}