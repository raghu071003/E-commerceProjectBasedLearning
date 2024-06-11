import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Email</h1>
      <p>Subscribe to our news letter and Stay update</p>
      <div>
        <input type="email" placeholder='Your Email ID'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
