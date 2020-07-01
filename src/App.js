import React, { useState, useEffect } from 'react';
import Hello from './components/Hello'
import Articles from './components/Articles'
import axios from 'axios' 

function App() {
  const [image, setImage] = useState(false)

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

  // return image
  //   ? <img src={image} />
  //   : <div>Loading...</div>

  if (image) {
    return <div>
      <Articles />
      <img src={image} />
    </div>
  }

  return <h1>Loading....</h1>
}

export default App;
