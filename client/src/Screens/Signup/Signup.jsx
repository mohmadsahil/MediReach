import React from 'react'
import "./Signup.css";
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
import { Footer } from '../../Components/Footer/Footer.jsx'

export const Signup = () => {
  return (
    <>
        <Navbar/>
        <div className='mainSignupDiv'>
            <div className='leftMainSignupDiv'>
                    <center>
                      <h1>Register Here!</h1>
                    </center>
                    <center>Please enter your details</center>
                    <div className='leftSignupContent'>
                      <div className='leftSignupNames'>
                      <input className='firstName' type="text" placeholder='First Name'/>
                      <input className='lastName' type="text" placeholder='Last Name'/>
                      </div>
                      <input className='phoneNumber' type="text" placeholder='Phone Number'/>
                      <input className='email' type="text" placeholder='Email'/>
                      <div className='genderAndDOB'>
                      <input className='gender' type="text" placeholder='Gender'/>
                      <input className='DOB' type="date" placeholder='DOB'/>
                      </div>
                      <input className='adharNumber' type="text" placeholder='Adhar Number'/>
                      <input className='password' type="text" placeholder='Password'/>
                      <button>SignUp</button>
                      <h1 style={{marginTop:"20px"}}>Already have Account? <a href="">LogIn</a></h1>
                    </div>
            </div>
            <div className='rightMainSignupDiv'>
                  <img className='mainSignupImage' src="Images/LoginImage.png" alt="" />
            </div>
      </div>
      <Footer/>
    </>
  )
}
