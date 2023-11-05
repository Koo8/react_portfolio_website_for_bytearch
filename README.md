# This project uses Create React App

- a portfolio website, one page, with nav, sections and working email sending form. 
- an react example for portforlio website.
- fully responsive
- 

### `npm start`

## Vertical Mobile Menu uses "react-scroll" - 'link'
- to, spy (for active spying), smooth, offset, duration
## email sending uses 'emailjs' package

## parallax effect using CSS
with pure css - set a background image on a div and set its position to fixed: 
background: url(img.jpg) no-repeat fixed 50% 50%;

## sliding banner using @keyframes

## trigger an action (function) when scrolling to a position
- use <code>new IntersectionObserver() </code>

## animation of hamburger menu 
- dynamically change classname
- use span to change the style of each bar6084

## react-toastify for toast notification after email sent
## emailjs for sending email from the contact form

## window.scroll(0,0) to return to the top after sending email
## problem: dotenv package not working properly due to  
- "webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it."
