import "./about.css";
import Me from "../../img/me.png"
import award from "../../img/spaghetti.png"
import ScrollReveal from 'scrollreveal'
import { useEffect } from "react";
import React from "react";
import gsap from "gsap";

const About = () => {
  
  useEffect(()=>{

    ScrollReveal({
      reset: false,
      distance: '100px',
      duration: 3000,
       delay: 100
    });
    ScrollReveal().reveal('.a-card', { delay: 0, origin: 'bottom' });
    ScrollReveal().reveal('.a-desc', { delay: 100, origin: 'bottom' });
    ScrollReveal().reveal('.a-title', { delay: 0, origin: 'bottom' });
    ScrollReveal().reveal('.a-sub', { delay: 100, origin: 'bottom' });
    
  },[])
  
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right" style={{backgroundColor: "black"}}>
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content. But fear not!!
        </p>
        <p className="a-desc">
          I made this entire portfolio in 2 days. Not bragging. So you know i am capable of making you
          read this about me page for approximately 1 minute. But enough chit-chat.
        </p>
        <p className="a-desc">
          I'm a Software Engineer, Team Leader, at Saleassist.ai, a wonderful start-up and B.E Computer Science and Engineering graduate, 
          I love research driven development which enabled me to build small but cute applications especially for my college, and it has allowed our college to get better admissions from it.
          Got a pat on the back from my college principal and founders. 
        </p>
          <p className="a-desc">
          I have had research collaborations and presented papers on Deep Learning at various Symposiums and Conferences. 
        </p>
          <p className="a-desc">
          Having 1 year of experience as Software Development Engineer in a start-up, I had the great oppurtunity to learn about leadership, management, finances, and task management. And i also learnt to keep my team well-fed so that the morale is always high and happy. 
          As of now I'm involved in developing API's, adding exclusive features and the UI (or) frontend, for an E-commerce product and also conduct end to end testing of API's and UI.
          S
        </p>
      </div>
    </div>

);
};
export default About;
