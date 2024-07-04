import { User } from "../Models/userSchema.js";
import { catchAsynchErrors } from "./catchAsyncErrors.js";
import createError from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

export const isAdminAuthenticated = catchAsynchErrors(async(req,res,next)=>{
    const token = req.cookies.adminToken;
    if(!token){
        return next(new createError("Admin Not Authenticated!",400));
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.id);  //because we have assign the payload "id" in jwtTokens.js
    if(req.user.role !== "Admin"){
        return next(new createError(`${req.user.role}! Not Authorized For This Resources`),403)
    }
    next();
})


export const isPatientAuthenticated = catchAsynchErrors(async(req,res,next)=>{
    const token = req.cookies.patientToken;
    if(!token){
        return next(new createError("Patient Not Authenticated!",400));
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decode.id);  //because we have assign the payload "id" in jwtTokens.js
    if(req.user.role !== "patient"){
        return next(new createError(`${req.user.role}! Not Authorized For This Resources`),403)
    }
    next();
})