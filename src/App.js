import React from 'react'
import { About, Content, Footer, Header, Info } from './containers'
import { CTA, Navbar, Front} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradientBG'>
            <Navbar />
            <Header />
        </div>
        <Front />
        <About />
        <Info />
        <Content />
        <CTA />
        <Footer />
    </div>
  )
}

export default App
