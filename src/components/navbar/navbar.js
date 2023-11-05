import React from 'react'
import './navbar.css'
import logo from '../../assets/bytearch_logo_1.png'
import contactIcon from '../../assets/contactIcon.png'
import { Link } from 'react-scroll' // help navbar to highlight active class
import { useState } from 'react'

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className='nav'>
          <img src={logo} alt="logo" className="logo" />
          <div className="menus">
              <Link className="desktopmenuitem" to='intro' activeClass='active' spy={true} smooth={true} offset={-100} duration={800}>Home <span className='bottomborder'></span></Link>
              <Link className="desktopmenuitem" to="about" activeClass='active' spy={true} smooth={true}>About <span className='bottomborder'></span></Link>
              <Link className="desktopmenuitem" to='portfolio' activeClass='active' spy={true} smooth={true} offset={-50}>Portfolio <span className='bottomborder'></span></Link>
              {/* <Link className="desktopmenuitem" to='clients' activeClass='active' spy={true} >Clients <span className='bottomborder'></span></Link> */}
      </div>
      
      {/* <Link to='contact' activeClass='active' spy='true' smooth={true}>  */}
      {/* <Link> can replace the .scrollIntoView()  */}
        <button className="contactBTN-desktop" onClick={()=>document.querySelector('#contact').scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })}>
        <img src={contactIcon} alt="contact icon" className="contactIcon" />
        Contact Us</button>
      {/* </Link> */}

      {/* mobile menus */}
      <div className="hamburger " onClick={()=>setShowMobileMenu(!showMobileMenu)}>
        <span className={ showMobileMenu ? 'crossmode' : 'line'}  id='one'></span>
        <span className={ showMobileMenu ? 'crossmode' : 'line'} id='two'></span>
        <span className={ showMobileMenu ? 'crossmode' : 'line'} id='three'></span>
      </div>
      <div className={ showMobileMenu ? 'mobilemenus showmenu ' : 'mobilemenus'} >
              <Link className="mobilemenuitem" to='intro' activeClass='active' spy={true} smooth={true} onClick={()=>setShowMobileMenu(false)}>Home </Link>
              <Link className="mobilemenuitem" to="about" activeClass='active' spy={true} smooth={true}onClick={()=>setShowMobileMenu(false)}>About </Link>
        <Link className="mobilemenuitem" to='portfolio' activeClass='active' spy={true} smooth={true} onClick={() => setShowMobileMenu(false)}>Portfolio </Link>
         <Link className="mobilemenuitem" to='contact' activeClass='active' spy={true} smooth={true} onClick={()=>setShowMobileMenu(false)}>Contact Us </Link>
              {/* <Link className="desktopmenuitem" to='clients' activeClass='active' spy={true} >Clients <span className='bottomborder'></span></Link> */}
      </div>
    </nav>
  )
}

export default Navbar
