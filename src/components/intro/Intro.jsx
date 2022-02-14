import "./intro.css";
import ScrollReveal from 'scrollreveal'
import { useEffect } from "react";

const Intro = () => {

  useEffect(() => {
  ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 3000,
     delay: 100
  });
  
  ScrollReveal().reveal('.i-left', { delay: 0, origin: 'bottom' });
  },[]);
  
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Welcome folks, My name is</h2>
          <h1 className="i-name">Rahul Ravi</h1>
          <h2 className="i-intro-2">But you can call me Spaghetti. Maybe.. We'll discuss that later</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">Singer-Songwritter</div>
            </div>
          </div>
          <p className="i-desc" style={{paddingTop: '10px'}}>
            I do everything that i can do, 
            specializing in creating stylish, modern websites, web services, sing, dance and pretty much a an all rounder (Kinda cringe but true).
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={Me} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
