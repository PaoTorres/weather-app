import { useState } from 'react'
import Weather from './components/Weather'
import './styles.css'

function App() {


  return (
    <div className="App">
      <div className="ctn-card">
      <h1>Weather App</h1>
      <Weather />
      </div>
    </div>
  )
}

export default App
