import React from 'react'
import "./LandingPage.css";
import CountUp from "react-countup";


export const LandingPage = () => {
  return (
    <>
        <div className='mainLandingPageDiv'>
            <div className='leftMainLandingPageDiv'>
                  <h1 className='text-[#112437]'>Connecting Patients</h1>
                  <h1 className='text-[#01BF89]'>To Quality Care</h1>
                  <p className='text-[#112437]'>Welcome to our medical medic reach, your trusted online destination for all things related to health and wellness.</p>
                  <button className='buttonAppoinment'>BOOK YOUR APPOINTMENT</button>
                  <div clas sName='mainReviewDiv'>
                      <div className='reviewImgDiv'>
                        <img className='reviewImg' src="/Images/ReviewImg.png" alt="Review images"/>
                      </div>
                  </div>

              <div className="leftLandingPageRecord">
              <div className='borderLeftLine'></div>
              <div className="HappyCustomerRecord">
                <h1 style={{ color: "#01BF89" }}>
                  <CountUp start={0} end={100} duration={2} delay={0}/>%
                </h1>
                <p>Good Facilities</p>
              </div>
              <div className="HappyCustomerRecord">
                <h1 style={{ color: "#01BF89" }}>
                  <CountUp start={0} end={1250} duration={2} delay={0} />+
                </h1>
                <p>Experience Doctor</p>
              </div>
              <div className="HappyCustomerRecord">
                <h1 style={{ color: "#01BF89" }}>
                  <CountUp start={0} end={15000} duration={2} delay={0} />+
                </h1>
                <p>Positive Review</p>
              </div>
            </div>
            </div>

            <div className='rightMainLandingPageDiv'>
                  <div>
                      <img className='doctorImg' src="/Images/doctorImg.png" alt="Review images"/>
                  </div>
            </div>
        </div>

        <div className="featuresImgDiv">
            <div>
              <img className='featuresImg' src="/Images/FeaturesImg.png" alt="" />
            </div>
        </div>  
    </>
  )
}
