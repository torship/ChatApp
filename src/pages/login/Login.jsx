import React from 'react'
import './login.css'
import asset from '../../assets/assets.js'
import { useState } from 'react'


const Login = () => {
    const [currState, setCurrState] = useState('Sign Up')
  return (
    <div className='login'>
        <div className="logo-container">
            <img src={asset.logo_big} alt="" className='logo' />
           
        </div>
        <form className='login-form'>
            <h2>{currState}</h2>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'>Sign Up</button>
            <div className="login-term">
                <input type="checkbox" />
                <p>agree to terms and conditions</p>

                <div className="login-forgot">
                    <p className="login-toggle">Already have an account? <span  >click here</span></p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login