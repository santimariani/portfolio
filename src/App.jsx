import { useState } from 'react'
import santiImage from './assets/santi.jpg';
import './App.css'

function App() {

  return (
    <>
      <img src={santiImage} className="logo" alt="React logo" />
      <h1>Hello, World!</h1>
      <h2>It's Santi :)</h2>
      <p></p>
      <h2>Hire me or I'll starve :(</h2>
      <p className="read-the-docs">
        santi@gospartanburg.com • 704-777-1494
      </p>
    </>
  )
}

export default App
