import { generateJWT } from "../Models/userSchema.js";

export const generateToken = (user,message,statusCode,res)=>{
    const token = generateJWT(user);
    const cookieName = user.role == "Admin" ? "adminToken" : "patientToken";
    res.status(statusCode).cookie(cookieName, token,{
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000),    //Converting into MicroSecond
        httpOnly:true,
    }).json({
        success:true,
        message,
        user,
        token
    });
}