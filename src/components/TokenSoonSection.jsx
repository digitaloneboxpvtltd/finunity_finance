import React from 'react';
import "./All_CSS/TokenSoonSection.css";
import circle_img from "../assets/images/listing_round_system.webp";
import tokenSoon_bg from "../assets/token_soon_bg.mp4";

const TokenSoonSection = () => {
  
    return (
    <div className='TokenSoonSection_page'>

        <video src={tokenSoon_bg} loop autoPlay muted className='video_bg'></video>

        <div className="Token_img_container">
            <img src={circle_img} alt="imagees" />
        </div>

        <div className='Token_info_container'>
            <h1 className='Token_heading'><span>Token</span> Launch Soon</h1>

            <div className='token_other_box'>
                {/* <div className='before_ilement'></div> */}
                <p>We are excited to announce that in the near future, we will be launching our very own Finunity Token! This groundbreaking new token is set to revolutionize the way our community interacts and engages with our platform.</p>

                <h3>−Token Distrebution−</h3>
               
                <div className='distrebutions_container'>
                    <p style={{color:"#55679C"}}>⨀ Community- 40%</p>
                    <p style={{color:"#A2CA71"}}>⨀ Founder - 15%</p>
                    <p style={{color:"#C8A1E0"}}>⨀ Investor- 20%</p>
                    <p style={{color:"#E3A5C7"}}>⨀ Advisory- 5%</p>
                    <p style={{color:"#BEC6A0"}}>⨀ Treasury- 10% </p>
                </div>

            </div>

            <div className='token_info_points_container'>
                <div className="token_info_point"> <p>Token -</p> <p>Finunity Token</p></div>
                <div className="token_info_point"> <p>Symbol -</p> <p>FUT</p></div>
                <div className="token_info_point"> <p>Supply -</p> <p>100 Million</p></div>
            </div>
        </div>
      
    </div>
  );
};

export default TokenSoonSection;