import React from 'react'
import Cards from '../Cards/Cards'
import Navbar from '../Navbar/Navbar'
import Homecontent from '../Homecontent/Homecontent'

import "./Homepage.css"


function Homepage() {
  return (
    <div className='Home' style={{backgroundColor:"#1e81b0"}} >
        
        <Navbar/>
        <Cards/>
        <Homecontent/>
        
    </div>
  )
}

export default Homepage