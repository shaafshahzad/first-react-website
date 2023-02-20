import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer section_padding">
      <div className="footer-heading">
        <h1 className='gradient_text'>Is this the last part of the website?</h1>
      </div>

      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
          <p>123 Street St., Toronto, Canada. All Rights Reserved</p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Contact us</h4>
          <p>123 Street St., Toronto, Canada</p>
          <p>+1 (416)-123-4567</p>
          <p>faketech@faketech.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2021 FakeTech. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
