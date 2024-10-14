import "./All_CSS/RoadMap.css";


const RoadMap = () => {
  return (
    <div className="RoadMapSection" id="RoadMapSection">

      <h1 className="roadmap_heading"> <span>Finunity </span> RoadMap</h1>

      <div className="outer_roadmap_container">
        <div className="progress_bar"></div>
        <div className="roadmap_points_container ">

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className=" point_heading">
                   <span> Q4 2024:</span>
                  </p>
                  <h4> Staking Launch</h4>
                  <div className="roadmap_info_points">
                    <p><span>Staking Platform Release:</span> Rollout of the Finunity staking platform, allowing users to stake their Finunity tokens and earn rewards. This marks the first step in our journey, providing the community with opportunities to grow their assets passively.</p>
                    <p><span>Community Rewards Program:</span> Initiation of community-driven reward programs to incentivize early adopters and long-term stakers, strengthening the Finunity ecosystem.                    </p>
                    
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className="point_heading">
                    <span>Q1 2025:</span>
                  </p>
                  <h4>Wallet Integration</h4>
                  <div className="roadmap_info_points">
                    <p><span>Finunity Wallet Launch:</span> Introduction of the Finunity Wallet, a secure and easy-to-use digital wallet for managing and storing Finunity tokens and other supported cryptocurrencies.</p>
                    <p><span>Multi-Asset Support:</span> Integration of multi-asset support within the wallet, allowing users to manage a diverse portfolio of crypto assets in one place.</p>
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className=" point_heading">
                  <span>Q2 2025:</span>
                  </p>
                  <h4> Payment Gateway Development</h4>
                  <div className="roadmap_info_points">
                    <p><span>Beta Release of Payment Gateway:</span> Launch of the beta version of the Finunity Payment Gateway, enabling merchants to accept payments in Finunity tokens and other cryptocurrencies seamlessly.</p>
                    <p><span>Merchant Partnerships:</span> Establishing key partnerships with merchants and e-commerce platforms to integrate the Finunity Payment Gateway, expanding the use cases for Finunity tokens.
                    </p>
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className="point_heading">
                  <span>Q3 2025:</span>
                  </p>
                  <h4>Exchange Platform</h4>
                  <div className="roadmap_info_points">
                    <p><span>Finunity Exchange Launch:</span> Launch of the Finunity decentralized exchange (DEX), providing users with a secure platform to trade Finunity tokens and other cryptocurrencies.</p>
                    <p><span>Liquidity Programs:</span> Introduction of liquidity provision programs to enhance trading pairs and volume, making the Finunity Exchange a vibrant marketplace for users.
                    </p>
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>

            <div className="roadmap_point point-box-anim">
                <div className="roadmap_info">
                  <p className="point_heading">
                   <span>Q4 2025:</span> 
                  </p>
                  <h4>BlockChain Development</h4>
                  <div className="roadmap_info_points">
                    <p><span>Finunity Blockchain Mainnet:</span> Deployment of the Finunity blockchain mainnet, establishing a robust and scalable infrastructure for all Finunity ecosystem activities.</p>
                    <p><span>Smart Contract Capabilities:</span> Enabling smart contract functionality on the Finunity blockchain, allowing developers to create decentralized applications (dApps) within the Finunity ecosystem.</p>
                    <p><span>Cross-Chain Compatibility:</span> Implementation of cross-chain bridges to ensure interoperability with other major blockchain networks, enhancing the versatility of Finunity's platform.</p>
                  </div>
                </div>
                <div className="dotLine"></div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default RoadMap;
