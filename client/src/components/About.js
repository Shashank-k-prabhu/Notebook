import React, { useContext, useEffect} from 'react'
import noteContext from '../contexts/notes/notesContext'

const About = () => {
  const a=useContext(noteContext)
  useEffect(()=>{
    a.update()
    //eslint-disable-next-line
  },[] )
  return ( 
    <div>
      <h1>About Page {a.state.name}  owned</h1>
    </div>
  )
}

export default About
