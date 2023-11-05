import React from 'react'
import './whatwedo.css'
import webDevImg from '../../assets/web_dev.png'
import websiteImg from '../../assets/website.png'
import mobileImg  from '../../assets/mobile.png'

function Whatwedo() {
  return (
      <section className='whatwedo' id='about'>
          <div className="summaryDiv">
              <h2 className="title">Our Services</h2>
              <p className="summaryPa">
                 At ByteArch, we specialize in software consulting and development services. Our team excels in crafting custom solutions to meet your unique needs. Whether it's web or mobile applications, database management, cloud integration, data analysis, or strategic guidance, we have the expertise to transform your ideas into reality and drive your business forward.
              </p>
              <div className='servicesDiv'>
                  <div className="serviceItem">
                      <img src={webDevImg} alt="" className="serviceIcon" />
                      <div className="serviceDetail">
                          <h4 className="serviceTitle">Custom software development </h4>
                          <p className="servicePa"> Delivering a solution that precisely matches your <br/>business objectives, providing a competitive edge and enabling you to innovate and grow. </p>
                      </div>
                  </div>
                  <div className="serviceItem">
                      <img src={websiteImg} alt="" className="serviceIcon" />
                      <div className="serviceDetail">
                          <h4 className="serviceTitle">Web Application development </h4>
                          <p className="servicePa"> Creating dynamic and user-friendly applications that run <br/>on web browsers, from e-commerce platforms to internal business tools.</p>
                      </div>
                  </div>
                  <div className="serviceItem">
                      <img src={mobileImg} alt="" className="serviceIcon" />
                      <div className="serviceDetail">
                          <h4 className="serviceTitle">Mobile Application Development:  </h4>
                          <p className="servicePa"> Crafting responsive and feature-rich mobile applications <br/>for both Android and iOS platforms.</p>
                      </div>
                  </div>
              </div>

          </div>
    </section>
  )
}

export default Whatwedo
