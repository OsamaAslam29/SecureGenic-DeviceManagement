import React from 'react'
import './Privacy.scss'
import logo from '../../Assets/Navbar/logo.png'
import email from '../../Assets/login/email_01.png'
import password from '../../Assets/login/email_02.png'
import { BiHide } from 'react-icons/bi';


const Privacy = () => {
  return (
    <div className='Login_container'>
      <div className="login_slider">

      </div>
      <div className="login_form">
        <div className="login_logo">
          <img src={logo} alt="Internet Error" />
        </div>
        <div className="login_heading">Login</div>
        <div className="login_para">Not yet registered?<span>Sign Up</span></div>

        <div className="input_fields">
          <div className="inputs">
            <img src={email} alt="Internet Error" />
            <input type="text" placeholder='Email Address' />
          </div>
          <div className="inputs">
            <img src={password} alt="Internet Error" />
            <input type="password" placeholder='Password' />
            <div className="hide_icon"><BiHide /></div>
          </div>
          <div className="signin_button"><button>Sign In</button></div>
        </div>
        <p>© 2022 Securegenic MDM. All rights reserved</p>

      </div>

    </div>
  )
}

export default Privacy
