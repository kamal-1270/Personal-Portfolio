import React from 'react'
import './Projects.css'
import imag from '../../images/chartproj1.jpeg'
import weatherimg from '../../images/weather.jpg'
import tempConvert from '../../images/tempconverterproj2.png'
const Projects = () => {
  return (
    <>
    <div className='container project' id='projects'>
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Top Recent Projects</h2>
      <hr/>
      <p className='pb-3 text-center'>👉 Here are my top 2 Projects with live links and source code</p>
        <div className='row' id='ads'>
            {/* project 1 */}
    <div className='col-md-4'>
        <div className='card rounded'>
            <div className='card-image'>
                <span className='card-notify-badge'>Chat App</span>
                <img src={imag} alt='project1'/>
            </div>
            <div className='card-image-overly m-auto mt-3'>
                <span className='card-detail-badge'>React</span>
                <span className='card-detail-badge'>JavaScript</span>
                <span className='card-detail-badge'>Socket.io</span>
                <span className='card-detail-badge'>ExpressJs</span>
            </div>
            <div className='card-body text-center'>
                <div className='ad-title m-auto'>
                    <h5 className='text-uppercase'>
                    Chat Application Using Websockets
                    </h5>
                </div>
                <a className='ad-btn' href='https://github.com/kamal-1270/chat-application-using-WebSocket'>view</a>
            </div>
        </div>
    </div>
    {/* project 2 */}
    <div className='col-md-4'>
        <div className='card rounded'>
            <div className='card-image'>
                <span className='card-notify-badge'>Web App</span>
                <img src={tempConvert} alt='project1'/>
            </div>
            <div className='card-image-overly m-auto mt-3'>
                <span className='card-detail-badge'>Html</span>
                <span className='card-detail-badge'>Css</span>
                <span className='card-detail-badge'>JavaScript</span>
            </div>
            <div className='card-body text-center'>
                <div className='ad-title m-auto'>
                    <h5 className='text-uppercase'>
                    Temperature Converter
                    </h5>
                </div>
                <a className='ad-btn' href='https://github.com/kamal-1270/Temperature_converter1'>view</a>
            </div>
        </div>
    </div>
    {/* project 3 */}
    
        </div>
    </div>
    </>
  )
}

export default Projects
