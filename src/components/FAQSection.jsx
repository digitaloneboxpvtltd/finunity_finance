import React from 'react';
import "./All_CSS/FAQSection.css";

const QsArr = [
    {question:"What is Finunity Finance? " , answer:"Finunity Finance is a cutting-edge decentralized finance (DeFi) platform designed to empower users with seamless access to a wide range of financial services. From staking and lending to earning rewards and managing assets, Finunity provides a secure and user-friendly environment to maximize the potential of your crypto assets."},
    {question:"How & Where can I buy Finunity tokens?" , answer:"You can purchase Finunity tokens directly through our official platform once the public sale begins. We will also list the tokens on major decentralized exchanges (DEXs) and centralized exchanges (CEXs). Ensure you follow our official channels for announcements on the exact launch dates and supported exchanges."},
    {question:"When and where will I receive my Finunity tokens?" , answer:"After purchasing Finunity tokens during the token sale, your tokens will be automatically distributed to your linked wallet. You will be able to view and manage them through the Finunity dashboard or any compatible wallet by importing the token contract address."},
    {question:"When and where will Finunity launch?" , answer:"Finunity Finance is set to launch in Q4 2024. The exact date and time will be communicated through our official social media channels and website. Stay tuned for updates on our launch events and promotions."},
    {question:"When can I apply for my Finunity DeFi Debit Card?" , answer:"Applications for the Finunity DeFi Debit Card will open shortly after the platform's official launch. Users who hold a certain amount of Finunity tokens will be prioritized in the application process. More details on the eligibility criteria and application process will be shared closer to the launch date."},
]

const FAQSection = () => {
  return (
    <div className='FAQSection_page' id='FAQ_section'>
      <div className='FAQSection_head'>
        <h1>FAQ</h1>
        <p>You may have questions, we have the answers.</p>
      </div>

      <div className='Quastion_container'>
      { QsArr.map((element, index) => (
    <details key={index}>
      <summary>
        {element.question} <span className='plus_icon'>+</span>
      </summary>
      <p>{element.answer}</p>
    </details>
  ))}
      </div>
    </div>
  );
};

export default FAQSection;