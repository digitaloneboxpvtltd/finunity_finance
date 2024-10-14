import React from 'react';
import "./All_CSS/WhyChooseSection.css";
import WhyChooseBox from './otherComponent/WhyChooseBox';
import poster_pc from "../assets/images/social_poster_pc.png";
import poster_mobile from "../assets/images/social_poster_mobile.png";

// social media icons
import discord_icon from "../assets/icons/SocialMedia_icons/discord_finn_icon.png";
import facebook_icon from "../assets/icons/SocialMedia_icons/facebook_finn_icon.png";
import insta_icon from "../assets/icons/SocialMedia_icons/insta_finn_icon.png";
import telegram_icon from "../assets/icons/SocialMedia_icons/telegram_finn_icon.png";
import twitter_icon from "../assets/icons/SocialMedia_icons/twitter_finn_icon.png";
import youtube_icon from "../assets/icons/SocialMedia_icons/youtube_finn_icon.png";


import communityLogo from "../assets/icons/whychooselogos/community_logo.png";
import returnsLogo from "../assets/icons/whychooselogos/returns_logo.png";
import rewardLogo from "../assets/icons/whychooselogos/reward_logo.png";
import secureLogo from "../assets/icons/whychooselogos/security_logo.png";
import investLogo from "../assets/icons/whychooselogos/invest_logo.png";


const arr =[{img_url:communityLogo, heading:"Community Support", information:"ENGAGE WITH A SUPPORTIVE COMMUNITY AND ACCESS EDUCATIONAL RESOURCES.", borderColor:"#FFFFFF"},
    {img_url:returnsLogo, heading:"Consistent Returns", information:"DAILY ROI ENSURES STEADY INCOME.", borderColor:"#EE74E1"},
    {img_url:rewardLogo, heading:"Attractive Rewards", information:"EARN ADDITIONAL INCOME THROUGH DIRECT BUSINESS MILESTONES AND RE-TOPUP BONUSES.", borderColor:"#1DA2B4"},
    {img_url:secureLogo, heading:"Secure Transactions", information:"SAFE AND RELIABLE DEPOSIT AND WITHDRAWAL PROCESSES.", borderColor:"#6C43FF"},
    {img_url:investLogo, heading:"Flexible Investment Options", information:"CHOOSE PACKAGES THAT SUIT YOUR FINANCIAL GOALS.", borderColor:"#81FF95"},
]


const WhyChooseSection = () => {
  return (
    <div className='WhyChooseSection_page' id='WhyChooseSection'>
        <div className='Heading_container'>
            <h1>Why <span>Choose</span> Us</h1>
            <p>Help agencies to define their new business objectives and then create professional software.</p>
        </div>

        <div className='ChooseUs_box_container'>
  
           {arr.map(box => (
                 <WhyChooseBox
                     key={box.img_url}
                     boxlogo={box.img_url} 
                     boxHeading={box.heading}
                     boxinfo={box.information} 
                     border_color={box.borderColor}
                 />
            ))}
            
        </div>

        {/* join communityn poster & social media links */}

        <div className='join_community_section'>
            <img src={poster_pc} alt="bg_poster" className='poster_pc_img'/>
            <img src={poster_mobile} alt="bg_poster" className='poster_mobile_img'/>
            
            <div className='info_container'>
            <h2>Join The Finunity  Family</h2>
            <p>Stay updated and connected with us by joining Finunity on our social media platforms!</p>
            </div>
            
            <div className='social_media_icons'>
                <a href="https://t.me/finunityofficialChannel"><img src={telegram_icon} alt="telegram icon" /></a>
                <a href="https://www.youtube.com/@finunity-p4u"><img src={youtube_icon} alt="youtube icon" /></a>
                {/* <a href=""><img src={insta_icon} alt="instagram icon" /></a>
                <a href=""><img src={twitter_icon} alt="twitter icon" /></a>
                <a href=""><img src={facebook_icon} alt="facebook icon" /></a>
                <a href=""><img src={discord_icon} alt="discord icon" /></a> */}
            </div>

        </div>
    </div>
  );
};

export default WhyChooseSection;