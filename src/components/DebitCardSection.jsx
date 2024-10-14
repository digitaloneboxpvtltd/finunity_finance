import React from 'react';
import "./All_CSS/DebitCardSection.css";
import card_img from "../assets/images/DebitCard_1.webp";

const DebitCardSection = () => {
  return (
    <div className='debitCardSection_page'>
        <img src={card_img} alt="card image"  className='debitCard_img'/>

        <div className='debitCardInfo_container'>
            <h2 className='debitInfo_heading'> <span>Finunity</span> DeFi Web3 Debit Card Upcoming</h2>
            <p>Finunity DeFi Debit Cards redefine financial accessibility and security. Offering anonymous transactions, prioritizing user privacy.</p>
            <p>Finunity DeFi Debit Cards offer a range of benefits, including:</p>
            
            <ul>
                <li><span>Privacy:</span> Anonymous transactions.</li>
                <li><span>Daily Convenience:</span> Perfect for daily transactions, online and offline, from shopping to dining.</li>
                <li><span>Global Accessibility:</span> Use them across borders, whether you're at a local store or traveling abroad.</li>
                <li><span>Transaction Efficiency:</span> Swift and secure transactions, enhancing the overall payment experience.</li>
                <li><span>ATM Accessibility:</span> Withdraw cash anywhere in the world.</li>
                <li><span>Security:</span> Enjoy anonymous transactions while keeping your funds secure in Finunity's non custodial DeFi wallet.</li>
                <li><span>Rewards Program:</span> Earn rewards with every use, turning spending into savings.</li>
            </ul>
        </div>
    </div>
  );
};

export default DebitCardSection;