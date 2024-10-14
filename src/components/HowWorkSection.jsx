import React from 'react';
import WorkStepBox from './otherComponent/workStepBox';
import "./All_CSS/HowWorkSection.css";
import step1_img from "../assets/images/step1.png";
import step2_img from "../assets/images/step2.png";
import step3_img from "../assets/images/step3.png";
import step4_img from "../assets/images/step4.png";
import { useEffect} from "react";


const arr = [{imgUrl:step1_img,stepN:"Step 1",heading:"Register & LogIn",info:"Creating an account is the first step. then you need to log in"},
             {imgUrl:step2_img,stepN:"Step 2",heading:"Add Fund",info:"Next, pick a payment method and add funds to your account"},
             {imgUrl:step3_img,stepN:"Step 3",heading:"Select a service",info:"Select the services you want and get ready to receive more publicity"},
             {imgUrl:step4_img,stepN:"Step 4",heading:"Enjoy Super Results",info:"You can enjoy incredible results when your order is complete"}
            ]

const HowWorkSection = () => {
  
  return (
    <div className="howWorkSection_page" id='howWorkSection'>
      <h1 className='section_heading'>How It <span>Works</span>?</h1>
      <div className='working_Step_container'>

        {arr.map(step => (
            <WorkStepBox 
              key={step.stepN}
              steplogo={step.imgUrl} 
              stepHead={step.heading}
              step_n={step.stepN} 
              step_info={step.info}
            />
        ))}

      </div>
    </div>
  );
};

export default HowWorkSection;