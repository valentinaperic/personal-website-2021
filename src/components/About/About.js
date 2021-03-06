import React from 'react';
import headshot from '../About/headshot.jpg';
import './About.scss';

const About = () => (
  <div className="container">
    <div className="about-me-content">
      <div className="about-me-img-container">
        <img src={headshot} className="about-me-img" alt="Valentina Peric Headshot" /> 
      </div>
      <div className="about-me-bio">
        <h3>I began coding when I was in middle school.</h3>

        <p>I did not realize that I could make it into a career until I got to college.
        There was a lot I had to relearn and I realized a lot has changed. This is something that excited me.
        In the world of technology, one learns quickly that the industry moves <i>quickly.</i></p>

        <p>So, this is how the journey of forever being a student started.
        I attained my degree in computer science in 2016 and I have been coding ever since.</p>

        <p className="interests"> In a nutshell, I am a community driven engineer who enjoys making the web intuitive,
        accessible, secure, and fast.
        </p>
          <p>When I am not coding, I am either attending tech events, playing video games, or playing the violin in my community orchestra.</p>
          <a href="https://www.linkedin.com/in/valentinaperic/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
            <span className="visually-hidden">LinkedIn</span>
          </a>
          <a href="https://github.com/valentinaperic" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
            <span className="visually-hidden">Github</span>
          </a>
          <a href="https://twitter.com/valentinacodes" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
            <span className="visually-hidden">Twitter</span>
          </a>
      </div>
    </div>
  </div>
);

export default About;
