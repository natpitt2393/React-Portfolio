import React from 'react';
import EAC from '../images/MAINEAC.png';
import dayPlanner from '../images/MAINDAY.png';
import MM from '../images/MM.png';
import MHT from '../images/LOGINMHT.png';
import quiz from '../images/Screenshot-Index.png';
import Project from './Project';



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
                description: "An app that allows you to create diary entries with different choices for mood input. After creating different diary entries you can see your mental health progress over time!",
                deployedURL: "https://mental-health-tracker-ne.herokuapp.com/",
                github: "https://github.com/natpitt2393/Mental-Health-Tracker",
                img: MHT
            },
            {
                id: 3,
                projectName: "Mixology Masters",
                description: "Mixology Masters is the perfect way to get your drink on with friends and family for any occasion! Simply sign up on our website and order the cocktail of your dreams! We also have fun facts about each of our cocktails so be sure to read those as well. At the end, check out and we'll have your drink ready for you in just a few days!",
                deployedURL: "https://mixology-masters.herokuapp.com/",
                github: "https://github.com/SteveKoutsodontis/Mixology-Masters",
                img: MM
            },
            {
                id: 4,
                projectName: "A Quiz about the Sopranos",
                description: "A quiz built through Javascript about New Jersey's favorite and most infamous crime family!",
                deployedURL: "https://natpitt2393.github.io/A-Quiz-About-The-Sopranos/",
                github: "https://github.com/natpitt2393/A-Quiz-About-The-Sopranos",
                img: quiz
            },
           
            {
                id: 5,
                projectName: "Day Planner",
                description: "This website enables users to keep track of their busy lives by entering in descriptions for what they have to do each hour.",
                deployedURL: "https://natpitt2393.github.io/Nat-Epstein-Day-Planner/",
                github: "https://github.com/natpitt2393/Nat-Epstein-Day-Planner",
                img: dayPlanner
            }
        ];

        function createProjectCard(projectCard) {
            return (
                <Project 
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
            <div className="Portfolio text-center">
               <h1>Projects</h1> 
                <div>
                   {Projects.map(createProjectCard)} 
                </div>
            </div>
        )


}