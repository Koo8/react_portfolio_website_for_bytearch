import React from 'react'
import './intro.css';
import backgroundHero from '../../assets/background-hero.jpg'
import contactIcon from '../../assets/contactIcon.png'

function Intro() {
  return (
    <section className='intro' id='intro'>
      <div className="container">
              <p className="first">Crafting Code, Unleashing Innovation. <br/>
Your Vision, Our Expertise.</p>
              <p className="second">At ByteArch, we specialize in turning 
          'your ideas into robust, innovative software solutions. Our expertise spans Python, JavaScript, Java, React, Next.js, SQL, and more.<br />Let's transform your concepts into reality. <br/> Explore our services today.</p>
              <button className="hireme">
                  <img src={contactIcon} alt="hire us" className="hireIcon" />
                  Hire Us</button>
      </div>
    </section>
  )
}

export default Intro;
