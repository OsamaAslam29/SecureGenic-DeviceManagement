import React from 'react'
import './Navbar.scss'
import n_logo from '../../Assets/Navbar/logo.png'
import n_button from '../../Assets/Navbar/button.svg'



const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={n_logo} alt="error" />
                </div>
                <div className="login_button">
                    <span>Welcome, admin</span>
                    <img src={n_button} alt="" />
                </div>
            </div>

           </>
    )
}

export default Navbar
