
import "./All_CSS/RoadMapNew.css";
import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerEffect(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const RoadMapNew = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);



  // gsap animation

  useGSAP(()=>{

    gsap.from(".Roadmap_main .progress",{
      height:"0%",
      duration:5,
      scrollTrigger:{
        trigger:".Roadmap_main .progress",
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 15%",
        end:"top -200%",
        scrub:2
      }
    })


    gsap.from(ref1.current,{
      x:"-300px",
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:ref1.current,
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 70%",
        end:"top 65%",
        scrub:2
      }
    })

    gsap.from(ref2.current,{
      x:"300px",
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:ref2.current,
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 70%",
        end:"top 65%",
        scrub:2
      }
    })

    gsap.from(ref3.current,{
      x:"-300px",
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:ref3.current,
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 70%",
        end:"top 65%",
        scrub:2
      }
    })

    gsap.from(ref4.current,{
      x:"300px",
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:ref4.current,
        scroller:"body",
        toggleActions: 'restart pause reverse pause',
        start:"top 70%",
        end:"top 65%",
        scrub:2
      }
    })


      gsap.from(ref5.current,{
        x:"-300px",
        opacity:0,
        duration:1,
        scrollTrigger:{
          trigger:ref3.current,
          scroller:"body",
          toggleActions: 'restart pause reverse pause',
          start:"top 70%",
          end:"top 65%",
          scrub:2
        }
      })


  })


  return (
    <div className='RoadMapSection_page' id="roadMapSection">
      <h1 className="roadmap_heading"> <span>Finunity </span> RoadMap</h1>

      <div className='Roadmap_main'>

        <div className='progress'></div>

       <div ref={ref1} className='roadmap_point_box right_side'> 
          <div className='content_box'>
            <div className='point_num'>1</div>
            <p>Staking Launch  (Q4 - 2024)</p>
            <ul>
                <li><span>Staking Platform Release:</span> Rollout of the Finunity staking platform, allowing users to stake their Finunity tokens and earn rewards. This marks the first step in our journey, providing the community with opportunities to grow their assets passively.</li>
                <li><span>Community Rewards Program:</span> Initiation of community-driven reward programs to incentivize early adopters and long-term stakers, strengthening the Finunity ecosystem.                    </li>
            </ul>
          </div>
        </div>

        
        <div ref={ref2} className='roadmap_point_box left_side'> 
          <div className='content_box'>
            <div className='point_num'>2</div>
            <p>Wallet Integration  (Q1 - 2025)</p>
            <ul>
                <li><span>Finunity Wallet Launch:</span> Introduction of the Finunity Wallet, a secure and easy-to-use digital wallet for managing and storing Finunity tokens and other supported cryptocurrencies.</li>
                <li><span>Multi-Asset Support:</span> Integration of multi-asset support within the wallet, allowing users to manage a diverse portfolio of crypto assets in one place.</li>
            </ul>
          </div>
        </div>

        
        <div ref={ref3} className='roadmap_point_box right_side'> 
          <div className='content_box'>
            <div className='point_num'>3</div>
            <p>Payment Gateway Development (Q2 - 2025)</p>
            <ul>
                <li><span>Beta Release of Payment Gateway:</span> Launch of the beta version of the Finunity Payment Gateway, enabling merchants to accept payments in Finunity tokens and other cryptocurrencies seamlessly.</li>
                <li><span>Merchant Partnerships:</span> Establishing key partnerships with merchants and e-commerce platforms to integrate the Finunity Payment Gateway, expanding the use cases for Finunity tokens.</li>
            </ul>
          </div>
        </div>

        
        <div ref={ref4} className='roadmap_point_box left_side'> 
          <div className='content_box'>
            <div className='point_num'>4</div>
            <p>Exchange Platform (Q3 - 2025)</p>
            <ul>
                <li><span>Finunity Exchange Launch:</span> Launch of the Finunity decentralized exchange (DEX), providing users with a secure platform to trade Finunity tokens and other cryptocurrencies.</li>
                <li><span>Liquidity Programs:</span> Introduction of liquidity provision programs to enhance trading pairs and volume, making the Finunity Exchange a vibrant marketplace for users.</li> 
            </ul>
          </div>
        </div>

        <div ref={ref5} className='roadmap_point_box right_side'> 
          <div className='content_box'>
            <div className='point_num'>5</div>
            <p>BlockChain Development (Q4 - 2025)</p>
            <ul>
                <li><span>Finunity Blockchain Mainnet:</span> Deployment of the Finunity blockchain mainnet, establishing a robust and scalable infrastructure for all Finunity ecosystem activities.</li>
                <li><span>Smart Contract Capabilities:</span> Enabling smart contract functionality on the Finunity blockchain, allowing developers to create decentralized applications (dApps) within the Finunity ecosystem.</li>
                <li><span>Cross-Chain Compatibility:</span> Implementation of cross-chain bridges to ensure interoperability with other major blockchain networks, enhancing the versatility of Finunity's platform.</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default RoadMapNew;