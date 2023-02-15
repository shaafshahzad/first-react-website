import React from 'react'
import './about.css'
import Feature from '../../components/feature/Feature'

const About = () => {
  return (
    <div className="about section_margin" id='about'>
      <div className="about-feature">
        <Feature title="Brief Product Intro" text="Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit nay you looking. If on prevailed concluded ye abilities. Address say you new but minuter greater. Do denied agreed in innate. Can and middletons thoroughly themselves him. Tolerably sportsmen belonging in september no am immediate newspaper. Theirs expect dinner it pretty indeed having no of." />
      </div>
      <div className="about-heading">
        <h1 className="gradient_text">This is a feature section, write anything important here.</h1>
      </div>
      <div className="about-container">
        <Feature title="Who" text="By so delight of showing neither believe he present. Deal sigh up in shew away when. Pursuit express no or prepare replied." />
        <Feature title="What" text="Looking started he up perhaps against. How remainder all additions get elsewhere resources. One missed shy wishes supply design answer formed." />
        <Feature title="Where" text="On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no." />
      </div>
    </div>
  )
}

export default About
