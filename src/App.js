import React, { useState, useEffect } from 'react';
import Hello from './components/Hello'
import axios from 'axios' 

function App() {
  const [image, setImage] = useState('')

  async function getDog () {
    try {
      const url = 'https://dog.ceo/api/breeds/image/random'

      const response = await axios.get(url)
      const { data: { message } } = response

      setImage(message)
    } catch (error) {
      console.log(error.message)
    }
  }

  // This is an enclosure
  // effect "encloses" getDog
  const effect = () => { getDog() }

  // This makes the function run only 1 time
  useEffect(effect, [])

  return (
    <div>
      <img src={image} />
    </div>
  )
}

export default App;
