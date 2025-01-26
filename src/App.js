import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Components/HomePage/Homepage';
import WhyChoose from './Components/Whychoose/Whychoose';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
import CTASection from './Components/CTASection/CTASection';
import Footer from './Components/Footer/Footer';
import RecentNews from './Components/RecentNews/RecentNews';




function App() {
  
  return (
    <div>
    <Homepage/>
    <WhyChoose/>
    
    <Services/>
    <Team/>
    <CTASection/>
    <RecentNews/>
    <Footer/>
    </div>
  )
}

export default App