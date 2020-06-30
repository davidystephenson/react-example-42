import React from 'react'

export default function Hello ({ xyz, callback }) {
  console.log('begin Hello test')
  return <p>
    Hello {xyz}!

    <button 
      onClick={callback}
      className='btn btn-primary'
    >Log</button>
  </p>
}