import React, { useMemo, useState } from 'react'
import './App.css';

const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);

  function weightChange(event) {
    setWeight(event.target.value)
  }

  function heightChange(event) {
    setHeight(event.target.value)
  }

  const output = useMemo(() => {
    const HeightInMeter = height / 100

    return (weight / HeightInMeter * HeightInMeter).toFixed(1);

  }, [weight, height])
  return (
    <main>
      <h1>BMI CALCULATOR</h1>

      <div className='input-section'>
        <p className='slider-input'>Weight: {weight} Kg</p>
        <input className='input-slider'
          type='range'
          step='1'
          min='40'
          max='200'
          onChange={weightChange}
        />
        <p className='slider-output'>Height:{height} Cm</p>
        <input className='input-slider'
          type='range'
          onChange={heightChange}
        />
      </div>
      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'>{output}</p>
        <div className="developer-credit">
          Developed by —
          <a
            href="https://github.com/Harsh1051"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="github-icon"
            />
            <span>Harsh1051</span>
          </a>
        </div>



      </div>
    </main>

  )
}

export default App