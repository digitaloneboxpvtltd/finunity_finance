import React from 'react';
import "./All_CSS/HeroSection.css";
import loop_bg from "../assets/images/loop_bg.png";
import binance_logo from "../assets/icons/tire1_2_logo/Binance_logo.svg";
import bitget_logo from "../assets/icons/tire1_2_logo/Bitget_logo.svg";
import bitmart_logo from "../assets/icons/tire1_2_logo/Bitmart_logo.svg";
import bybit_logo from "../assets/icons/tire1_2_logo/Bybit_logo.svg";
import AutoSlider from './AutoSlider';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HeroSection = () => {


    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from(".heroSection_info_container",{
            x:"-200px",
            opacity:0,
            duration:0.5
        })

        tl.from(".heroSection_info_container a",{
            scale:0,
            opacity:0,
            duration:0.6
        })


        tl.from(".hero_other_box",{
            x:"200px",
            opacity:0,
            duration:0.5
        })
    
    })


  return (
    
    <div className='HeroSection_page' id='HeroHome'>
        <img src={loop_bg} alt="bg_img" className='hero_bg_img'/>

        <div className='hero_main_content'>

            <div className='heroSection_info_container'>
                <p>Fintech + Community = Finunity</p>
                <h1>Unlock Your <span>Financial</span> Freedom: Join Our  Network Today</h1>
               
                <a href="">
                    <button className='hero_learn_more_btn'>
                        <span></span>
                        Learn More
                    </button>
                </a>
            </div>
    
            <div className='hero_other_box'>
                <div className='before_ilement'></div>
                <div className='finunity_about'>
                    <h1>Finunity</h1>
                    <p>Welcome to Finunity, the cutting-edge finance and cryptocurrency community designed to revolutionize the way we interact with digital assets and financial services. Our mission is to create a seamless and inclusive platform where users can explore, invest, and grow their wealth through innovative financial solutions.</p>
                </div>
    
                <div className='exchange_listing'>
                    <p>Exchange Listing Coming Soon</p>
                    <div className='exchange_logo_container'>
                        <img src={binance_logo} alt="logos" />
                        <img src={bitget_logo} alt="logo" />
                        <img src={bitmart_logo} alt="logo" />
                        <img src={bybit_logo} alt="logo" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default HeroSection;