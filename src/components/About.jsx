import React from "react";
import '../stylesheets/About.css'
import '../stylesheets/About-Mobile.css'

const About = () => {
  return(
    <div className="about-container" id="about">
      <h1 className="about__title primary">About Me</h1>
      <p className="about__description secondary">
        Hello! 👋 I'm Haziel Campos, a passionate programmer from Mexico. I started coding at 8, and it quickly became my greatest passion.<br /><br />

        I'm a versatile developer, skilled in JavaScript, C#, TypeScript, Java, and Kotlin. My expertise lies in full-stack development with a focus on JavaScript and Node.js.<br /><br />
          
        I create interactive UIs using React and Vite, and on the backend, I love working with Express to build robust web applications.<br /><br />
          
        Solving complex problems creatively excites me, and I'm an avid gamer too. I'm always eager to learn and grow as a developer.<br /><br />
          
        Thanks for visiting my portfolio! I'm excited about new projects and opportunities. Feel free to reach out!
      </p>
    </div>
  )
}

export default About; 