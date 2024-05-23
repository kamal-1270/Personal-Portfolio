import React from 'react'
import "./Menus.css"
import { Link } from 'react-scroll';
// import photo from '../../src/images/kamal.jpeg'
import {FcAbout,FcBriefcase, FcBiotech, FcBusinessContact, FcHome, FcReadingEbook, FcVideoProjector, FcVoicePresentation} from "react-icons/fc";
const Menus = ({toggle}) => {
  return (
      <>
      {toggle ? (
        <>
        <div className="navbar-profile-pic">
        <img src="kamal.jpeg"
        alt="profile-pic" />
      </div>

      <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
              <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome/>
                Home
                </Link>
                </div>
                <div className="nav-link">
                  <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout/>About
                  </Link>
                  </div>
                <div className="nav-link">
                  <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook/>Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech/>Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector/>Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='workexp' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBriefcase/>Work-Experince
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='contacts' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact/>Contact
                  </Link>
                </div>
                
        </div>
      </div>
      
        </>
      ):(
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
              <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome/>
                
                </Link>
                </div>
                <div className="nav-link">
                  <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout/>
                  </Link>
                  </div>
                <div className="nav-link">
                  <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook/>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech/>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector/>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='workexp' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBriefcase/>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='contacts' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact/>
                  </Link>
                </div>
        </div>
      </div>
      )}
      </>
  )
}

export default Menus
