import React from 'react'
import "./About.css"
import { FaHeartbeat } from "react-icons/fa";

const aboutDataone = [
    { text: 'Medical Professional' },
    { text: 'Medical Professional' },
    { text: 'Medical Professional' },
  ];
const aboutDatatwo = [
    { text: 'Medical Professional' },
    { text: 'Medical Professional' },
    { text: 'Medical Professional' },
  ];

export const About = () => {
  return (
    <>
        <div className='mainAboutSection'>
            <div className='leftAboutSection'>
                <img className='leftAboutSectionImg' src="/Images/AboutUsImg.png" alt="About Us Images" />
            </div>
            <div className='rightAboutSection'>
                <h1>Affordable Health Care Solutions</h1>
                <p>Need to be sure there isn't anything embarrassing hidden in
                    the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It uses a
                    dictionary of over 200 Latin words, combined with a handful of model
                </p>
                <div className='aboutSubSection'>
                    <div className='leftAboutSubSection'>
                        {aboutDataone.map((item,index)=>(
                             <div key={index} className='medicalProfessional'>
                                <FaHeartbeat style={{color:"#63D0FF", fontSize:"40px"}} />
                                <p1>{item.text}</p1>
                            </div>
                        ))}
                        <button className='aboutAppoinmentBtn'>APPOINMENT</button>
                    </div>
                    <div className='rightAboutSubSection'>
                        {aboutDatatwo.map((item,index)=>(
                             <div key={index} className='medicalProfessional'>
                                <FaHeartbeat style={{color:"#63D0FF", fontSize:"40px"}} />
                                <p1>{item.text}</p1>
                            </div>
                        ))}
                        <button className='aboutAppoinmentBtn'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
