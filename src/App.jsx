
import './App.css'
import AutoSlider from './components/AutoSlider'
import DebitCardSection from './components/DebitCardSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import HowWorkSection from './components/HowWorkSection'
import NavBar from './components/NavBar'
import RoadMap from './components/RoadMap'
import RoadMapNew from './components/RoadMapNew'
import TokenSoonSection from './components/TokenSoonSection'
import WhyChooseSection from './components/WhyChooseSection'

function App() {

  return (
   <div className='app_container'>
    <NavBar/>
    <HeroSection/>
    <AutoSlider/>
    <HowWorkSection/>
    <DebitCardSection/>
    <TokenSoonSection/>
    {/* <RoadMap/> */}
    <RoadMapNew/>
    <WhyChooseSection/>
    <FAQSection/>
    <Footer/>
   </div>
  )
}

export default App
