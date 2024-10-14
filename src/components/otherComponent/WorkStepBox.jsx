import React from 'react';
import "./WorkStepBox.css"
import { useEffect } from 'react';

const WorkStepBox = (prop) => {
  
  //   animation

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("stepBox_anim");   
          }
         else{
            entry.target.classList.remove("stepBox_anim");   
          }
        });
      }, { threshold: 0.1});
    
      const stepboxes = document.querySelectorAll(".stepBox");
      stepboxes.forEach((box) => observer.observe(box));
    
      return () => {
        observer.disconnect();
      };
    }, []);

  return (
    <div className='stepBox'>
      <img src={prop.steplogo} alt="logo" />
      <h2>{prop.step_n}</h2>
      <h4>{prop.stepHead}</h4>
      <p>{prop.step_info}</p>
    </div>
  );
};

export default WorkStepBox;