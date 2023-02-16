import React from 'react'
import './content.css'
import eureka from '../../assets/eureka.png'

const Content = () => {
  return (
    <div className='content section_padding' id='examples'>
      <div className="content-image">
        <img src={eureka} alt='eureka'/>
      </div>
      <div className="content-container">
        <h1 className='gradient_text'>Here is where the main content goes. It's Nice to have some information here.</h1>
        <p>Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried state fat could boy its among shall.</p>
      </div>
    </div>
  )
}

export default Content
