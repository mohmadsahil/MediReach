import React from "react";
import "./ContactUs.css"


export const ContactUs = () => {
  return (
    <>
    <div className="contactUsTextDiv">
        <center className="contactUsText">Contact Us</center>
    </div>
      <div className="mainContactUsForm">
        <div className="leftContactUsForm">
                        <div className="formName">
                            <p>Name </p>
                            <input type="text" />
                        </div>

                        <div className="emailAndNumber">
                            <div className="formEmail">
                            <p>Email</p>
                            <input type="text" />
                            </div>
                            <div className="formEmail">
                            <p>Number</p>
                            <input type="text" />
                            </div>
                        </div>

                        <div className="formMessage">
                            <p>Message</p>
                            <textarea type="text"/>
                        </div>

                        <div className="msgBtn">
                            <button className="mainMsgBtn">SUBMIT</button>
                        </div>
                    </div>


        <div className="rightContactUsForm">
            <div className="contactUsImageDiv">
                <img className="contactUsImage" src="/Images/ContactUsImage.png" alt="" />
            </div>
        </div>
      </div>
    </>
  );
};
