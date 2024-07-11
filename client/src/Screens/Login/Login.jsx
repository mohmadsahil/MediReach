import React from 'react'
import "./Login.css"
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
import { Footer } from '../../Components/Footer/Footer.jsx'

export const Login = () => {
  return (
    <>
      <Navbar/>
      <div className='mainLoginDiv'>
            <div className='leftMainLoginDiv'>
                    <center>
                      <h1>Welcome again!</h1>
                    </center>
                    <center>Please enter your details</center>
                    <div className='leftLoginContent'>
                      <input type="text" placeholder='Phone Number'/>
                      <input type="text" placeholder='Password'/>
                      <input type="text" placeholder='Confirm Password'/>
                      <button>Login</button>
                      <h1 style={{marginTop:"20px"}}>Don't have any Account? <a href="">SignUp</a></h1>
                    </div>
            </div>
            <div className='rightMainLoginDiv'>
                  <img className='mainLoginImage' src="Images/LoginImage.png" alt="" />
            </div>
      </div>
      <Footer/>
    </>
  )
}
