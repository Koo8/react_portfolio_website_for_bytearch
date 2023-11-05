import React from 'react'
import './pastprojects.css'
import stockphoto from '../../assets/stockphoto.jpg'

function Pastproject() {
  return ( 
      <section className='projects' id='portfolio'>
        <div className="summaryDiv">
            <h2 className="title">Projects Showcase</h2>
            <p className="summaryPa">
                We take pride in presenting a curated selection of our most outstanding and innovative projects. These are not just success stories; they are a testament to our dedication to excellence in software development. 
            </p>
        </div>
          <div className='projectshowcase'>
              
              <div className="projectItem">
                  <img src={stockphoto} alt="" className="projectphoto" />
              </div>    
              <div className="projectItem">
                  <img src={stockphoto} alt="" className="projectphoto" />
              </div> 
              <div className="projectItem">
                  <img src={stockphoto} alt="" className="projectphoto" />
              </div> 
              <div className="projectItem">
                  <img src={stockphoto} alt="" className="projectphoto" />
              </div>               

        </div>
    </section>
  )
}

export default Pastproject
