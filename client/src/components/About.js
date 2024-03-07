import React, { useContext, useEffect} from 'react'
import noteContext from '../contexts/notes/notesContext'

const About = () => {
  const a=useContext(noteContext)
  
  return ( 
    <div>
      <h1>About Page  owned</h1>
    </div>
  )
}

export default About
