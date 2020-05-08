import React from 'react'
import Rainbow from '../higherOrderComponent/Rainbow'

const About = () => {
  return(
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolo ipsum dolor lorem ipsum doloripsum dolor lorem ipsum doloripsum dolor lorem ipsum doloripsum dolor lorem ipsum doloripsum dolor lorem ipsum doloripsum dolor lorem ipsum doloripsum dolor lorem ipsum doloripsum dolor lorem ipsum doloripsum dolor lorem ipsum doloripsum dolor lorem ipsum dolorr</p>
    </div>  
  )
}

export default Rainbow(About);