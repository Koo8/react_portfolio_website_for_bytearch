

import React, { useEffect, useRef, useState }from 'react'
import './contact.css'
import facebookImg from '../../assets/facebook.png'
import youtubeImg from '../../assets/youtube.png'
import twitterImg from '../../assets/twitter.png'
import instagramImg from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() { 
  const [contactIsVisible, setContactIsVisible] = useState();

  const form  = useRef()
  // email set up
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ck3hu9e', 'template_1t91kgw', form.current, 'QvJHgliaxvCjcGrXA')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  // toastify
  const notify = () => {
    toast("Thanks for contacting us. Your email has been sent.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    window.scroll(0, 0);
  };

  // for triggering sliding in banner
  const myRef = useRef();// instead of using document.queryselector to grab the DOM, use ref in react
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setContactIsVisible(entry.isIntersecting);
      
    }, {
      //  threshold:.5,
      // rootMargin: "-20px"
    });
    
    observer.observe(myRef.current)
    
  }, [])
  return (
      <section id='contact' ref={myRef}>
        <div className="summaryDiv">
            <h2 className="title">Contact Us</h2>
            <p className="summaryPa">
                Feel free to fill out the form and contact us for any potential software development
            </p>
          </div>
          <form action="" className='myform' ref={form}  onSubmit={sendEmail}>
              <input type="text" className='name' placeholder='name' id='name' name="from_name"/>
              <input type="text" className="email" placeholder='email' name="reply_to" />
              <textarea name="message" id="" cols="30" rows="10" className='msg' placeholder='Your Message' ></textarea>
              <button className="submit" onClick={notify}>Submit</button>
              
      </form>
      <div className="links">
        <img src={facebookImg} alt="" className="link" />       
        <img src={youtubeImg} alt="" className="link" />
        <img src={twitterImg} alt="" className="link" />
        <img src={instagramImg} alt="" className="link" />
      </div>
      {/* banner */}
      <div className={`${contactIsVisible ? "show banner": "banner"}`}>
      Make a website? Contact Us
      </div>
       <ToastContainer />
         
    </section>
  )
}

export default Contact
