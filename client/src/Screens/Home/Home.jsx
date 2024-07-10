import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar.jsx'
import { LandingPage } from '../../Components/LandingPage/LandingPage.jsx'
import { About } from '../../Components/About/About.jsx'
import { HealthCare } from '../../Components/HealthCare/HealthCare.jsx'
// import { Doctors } from '../../Components/Doctors/Doctors.jsx'
import { ContactUs } from '../../Components/ContactUs/ContactUs.jsx'
import { Footer } from '../../Components/Footer/Footer.jsx'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <LandingPage/>
        <About/>
        <HealthCare/>
        <ContactUs/>
        <Footer/>
    </>
  )
}
