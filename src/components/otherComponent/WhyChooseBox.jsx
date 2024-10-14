import "./WhyChooseBox.css";
import { useEffect } from 'react';

const WhyChooseBox = (prop) => {

  // animation

  useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("whyChooseBox_anim"); 
          }
         else{
            entry.target.classList.remove("whyChooseBox_anim"); 
          }
        });
      }, { threshold: 0.1});
    
      const stepboxes = document.querySelectorAll(".WhyChooseBox");
      stepboxes.forEach((box) => observer.observe(box));
    
      return () => {
        observer.disconnect();
      };
    }, []);

  return (
    <div className='WhyChooseBox' style={ { borderColor: prop.border_color }}>
      <img src={prop.boxlogo} alt="box-logo" />
      <h2>{prop.boxHeading}</h2>
      <p>{prop.boxinfo}</p>
    </div>
  );
};

export default WhyChooseBox;