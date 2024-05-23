import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
      <div className='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img src='kamal.jpeg' alt='profile-pic'></img>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content' id='about'>
                <h1>About me</h1>
                <p>
                A Confident & outgoing indivisual focused upon
                building a carrer where my conceptual and
                managerial skill will get platform to be
                showcased for a productive purpose.
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
