import React from 'react';
import "./All_CSS/Footer.css";
// social media icons
import discord_icon from "../assets/icons/SocialMedia_icons/discord_finn_icon.png";
import facebook_icon from "../assets/icons/SocialMedia_icons/facebook_finn_icon.png";
import insta_icon from "../assets/icons/SocialMedia_icons/insta_finn_icon.png";
import telegram_icon from "../assets/icons/SocialMedia_icons/telegram_finn_icon.png";
import twitter_icon from "../assets/icons/SocialMedia_icons/twitter_finn_icon.png";
import youtube_icon from "../assets/icons/SocialMedia_icons/youtube_finn_icon.png";

// finunity logo
import finLogo from "../assets/icons/finunity logo.png";


const Footer = () => {

  const handleButtonClick = () => {
    window.open('/finunity updateNew] .pdf');
  };
  
  return (
    <div className='FooterSection_page'>
      <img src={finLogo} alt="" className='finLogo'/>
      <p className='footer_info'>FINUNITY IS MORE THAN JUST A PLATFORM: IT'S A MOVEMENT TOWARDS A MORE INCLUSIVE AND INNOVATIVE FINANCIAL FUTURE.</p>
      
      <div className='social_media_icons'>
        <h3>Follow Us:</h3>
        <a href="https://t.me/finunityofficialChannel"><img src={telegram_icon} alt="telegram icon" /></a>
        <a href="https://www.youtube.com/@finunity-p4u"><img src={youtube_icon} alt="youtube icon" /></a>
        {/* <a href=""><img src={insta_icon} alt="instagram icon" /></a>
        <a href=""><img src={twitter_icon} alt="twitter icon" /></a>
        <a href=""><img src={facebook_icon} alt="facebook icon" /></a>
        <a href=""><img src={discord_icon} alt="discord icon" /></a> */}
      </div>

      <div className="footer_mainContent">

        {/* <div className="Important">
          <h2>Services</h2>
          <a href=""><p>Digital Imaging</p></a>
          <a href=""><p>Motion Ads</p></a>
          <a href=""><p>Visual Documentation</p></a>
        </div> */}

        <div className="Important">
          <h2>Company</h2>
          <a href="#HeroHome"><p>About Us</p></a>
          <a href="mailto:support@finunity.world"><p>Contact Us</p></a>
          <a href=""><p>Careers</p></a>
        </div>

        <div className="Important">
          <h2>Important</h2>
          <p id='PlanPPT' onClick={handleButtonClick}>Plan PPT</p>
          <a href="#WhyChooseSection"><p>Why Choose Us</p></a>
          <a href="#FAQ_section"><p>FAQs</p></a>

        </div>

        <div className="Important">
          <h2>Further Information</h2>
          <a href=""><p>Terms & Conditions</p></a>
          <a href="" target="_blank"><p>Privacy Policy</p></a>
        </div>

      </div>

      <p className='Rights_text'>@2024. All rights reserved</p>
    </div>
  );
};

export default Footer;