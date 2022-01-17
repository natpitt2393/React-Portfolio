import React from 'react';
import natImg from '../images/NHE_pic.JPG';

export default function AboutMe() {
  return (
    <div className='text-center'>
    <h1 className='px-5 text-danger'>About Me</h1>
      <p className='px-5 py-4'>
        Nat Epstein is a new full-stack web developer eager to leverage his background experience in cinema and media studies, retail/customer service and education to create a more meaningful web experience for all users. He earned a certificate in full-stack web development from the Continuing Education department at Rutgers University that focused on HTML5, CSS3, JavaScript, React.JS, Node.JS, MySQL, MongoDB as well as many other technologies on both the front-end and back-end. Nat uses his BA and MA degrees in media studies even to this day as a web developer to look for patterns and to pay particular attention to detail. From those details, he can build up a more comprehensive view of the bigger picture. As a motivator and team player, Nat always looks to bring out the best in all those around him and strives to explain difficult concepts in clear and concise terms, as he did from his time as a graduate teaching assistant at The New School and as an adjunct instructor at Rutgers University in the Graduate School of Education. Most recently, during his time as a Store Experience Associate at the Family Experience Store, Camp, he cultivated his skills in salesmanship and customer service. Though his path to web development is non-traditional, he will make a valuable asset to your team as an analytical, quick-learning, highly motivated individual who can work well independently and with others. He hopes to make meaningful contributions to the world of web development. 
      </p>
      <p className='px-5'>
        Nat holds a BA in Cinema and Media Studies from the University of Chicago and an MA in Media Studies from The New School. He loves playing with his cat, Orbison, named after the great rockabilly sensation Roy Orbison, who is currently helping him code as he speaks. He also is a film buff who greatly enjoys all types of music, from Biggie Smalls to the Doors, and watching the Pittsburgh Steelers in the fall every Sunday afternoon!
      </p>
      <img src={natImg} width='30%' length='30%' alt='Nat Epstein'></img>
    </div>
  );
}