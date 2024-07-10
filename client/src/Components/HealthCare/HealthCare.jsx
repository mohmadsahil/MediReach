import React from 'react'
import "./HealthCare.css"
import { RiMedicineBottleFill } from "react-icons/ri";
import { BiSolidInjection } from "react-icons/bi";
import { GiHeartOrgan } from "react-icons/gi";
import { GiFootPlaster } from "react-icons/gi";
import { BsEyeFill } from "react-icons/bs";
import { FaPersonPregnant } from "react-icons/fa6";




export const HealthCare = () => {

  const healthCareData = [
        {text:"Internal Medicine",subText:"Amazing Medicine",Img:<RiMedicineBottleFill/>},
        {text:"Dentist",subText:"Amazing Medicine",Img:<BiSolidInjection/>},
        {text:"Cardiologist ",subText:"Amazing Medicine",Img:<GiHeartOrgan />},
        {text:"Orthopedics",subText:"Amazing Medicine",Img:<GiFootPlaster />},
        {text:"Ophthalmologist",subText:"Amazing Medicine",Img:<BsEyeFill />},
        {text:"Gynecologist",subText:"Amazing Medicine",Img:<FaPersonPregnant />},
  ]
  return (
    <>
        <div className='mainHealthCareDiv'>
              <div className='mainHealthCareCard'>
                {healthCareData.map((item,index)=>(
                  <div key={index} className='healthCareCard'>
                        <div className='healthCareCardImg'>{item.Img}</div>
                        <h1 className='healthCareCardText'>{item.text}</h1>
                        <p style={{color: "#112437"}} className='healthCareCardPara'>{item.subText}</p>
                        <button>Read More</button>
                  </div>
                ))}
              </div>
        </div>
    </>
  )
}
