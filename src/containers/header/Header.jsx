import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import tech from '../../assets/tech.png'

const Header = () => {
  return (
    <div className="header section_padding" id='home'>        <div className="header-content">
      <h1 className="gradient_text">
        This is a website with absolutely nothing of value on it.
      </h1>
      <p>That doesn't matter. Believing neglected so so allowance existence departure in. In design active temper be uneasy. Thirty for remove plenty regard you summer though. He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.</p>
      <div className="header-content_input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
      </div>
      <div className="header-content_activeUsers">
        <img src={people} alt="people"/>
        <p>109k+ current active users</p>
      </div>
    </div>
    <div className="header-image">
      <img src={tech} alt="tech"/>
    </div>
  </div>
  )
}

export default Header
