import React from 'react'
import Feature from '../../components/feature/Feature'
import './info.css'

const infoData = [
  {
    title: 'This might be important information',
    text: "It's not, but it could be. I just don't know what to put here. By impossible of in difficulty discovered celebrated ye. Justice joy manners boy met resolve produce. Bed head loud next plan rent had easy add him.",
  },
  {
    title: 'Maybe this is important information',
    text: "No it's not. I'm just making stuff up at this point. Still court no small think death so an wrote. Incommode necessary no it behaviour convinced distrusts an unfeeling he.",
  },
  {
    title: 'How about this? Is this important?',
    text: 'I think it is. I think this is important information. Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
  },
  {
    title: 'Was it really important information?',
    text: "No, it was not. I lied to you. I'm sorry :/",
  }
]

const Info = () => {
  return (
    <div className='info section_padding' id='what'>
      <div className='info-heading'>
        <h1 className="gradient_text">Important information is great to have on a website. Unfortunately, I don't know what to put here.</h1>
      </div>
      <div className="info-container">
        {infoData.map((item, index) => (
          <Feature title={item.title} text={item.text} id={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Info
