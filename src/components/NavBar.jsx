import "./All_CSS/NavBar.css";
import { useState ,useEffect} from "react";
import finunity_logo from "../assets/icons/finunity logo.png";
import menuBar from "../assets/icons/menu.png";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

export default function NavBar(){

    const [isvisible,setisvisible] = useState(false);
    useEffect(() => {
        const navbar = document.querySelector(".nav_navigation_container")
        navbar.classList.add("animateNav");

    },[isvisible]);

    function handleIsVisible(){
        setisvisible(!isvisible);

    }


    // show ppt

    const handleButtonClick = () => {
        window.open('/finunity updateNew] .pdf');
      };

    
    // Gsap animation

    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from("#navBar",{
            y:"-4rem",
            opacity:0,
            duration:0.7
        })

        tl.from(".finunity_logo",{
            x:"-20px",
            opacity:0,
            duration:0.5
        })

        tl.from(".Nav_Button_container ",{
            x:"20px",
            opacity:0,
            duration:0.5
        })
     
    })


    return(
    <div className=" nav_container" id="navBar">
        <img loading="lazy" src={finunity_logo} alt="" className="finunity_logo" />

        <div  className={`${isvisible  ?  "none" :"navIsHidden "} nav_navigation_container`}>           
              
               <a href="#HeroHome"><div className="nav_navigation flex" >Home</div></a>

               <hr />

               <a href="#howWorkSection"><div className="nav_navigation flex" >Working</div></a>
             
               <hr />

               <a href="" onClick={handleButtonClick}><div className="nav_navigation flex" >PPT</div></a>
               
               <hr />

                <a href="mailto:support@finunity.world"><div className="nav_navigation"  >Contact Us</div></a>

                <hr />

                <a href="#FAQ_section"><div className="nav_navigation flex" >FAQs</div></a>


            </div>

            <div className="Nav_Button_container">
            {/* <button class="button-64" role="button"><span class="text">Button 64</span></button> */}

                <a href="https://finunity.world/MemberPanel/Login.aspx"> 
                    <button className="signIn_button"><span></span> Sign In</button>
                </a>
            
               <a href="https://finunity.world/Member-Registration.aspx">
                    <button className="signUp_button"> <span></span>  Sign Up</button>
                </a> 

            </div>
           


            <div className= "toggle_nav_button" onClick={handleIsVisible}>
               <img src={menuBar} alt="manu btn img" />      
            </div>

    </div>)     
}