import React from 'react'
import './css/loginsignup.css'
function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
          <div>
            <button>Continue</button>
            <p className='loginsignup-login'>Aldready have an account? <span>Login</span></p>
          </div>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' className='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
