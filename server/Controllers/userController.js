import { catchAsynchErrors } from "../Middlewares/catchAsyncErrors.js";
import createError from "../Middlewares/errorMiddleware.js";
import { User } from "../Models/userSchema.js";
import {generateToken} from "../Utils/jwtTokens.js";

export const patientRegister = catchAsynchErrors(async(req,res,next)=>{
    const{firstName,lastName,email,phone,password,gender,dob,adharNumber,role} = req.body;

    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !adharNumber || !role){
        return next(new createError("Kindly Enter The Full Form!",400));
    }
    const isRegistered = await User.findOne({phone})
    if(isRegistered){
        return next(new createError("User Already Register, Kindly Login!",400));
    }
    else{
        const user = new User(req.body);
        const saveData = await user.save();
        generateToken(user,"User Has Been Register Successfully!",200,res)
    }
})

export const patientLogin = catchAsynchErrors(async(req,res,next)=>{
    const{phone,password,confirmPassword,role} = req.body;
    if(!phone || !password || !confirmPassword || !role){
        return next(new createError("Kindly Enter Correct Details!",400))
    }

    if(password !== confirmPassword){
        return next(new createError("Password & Confirm Password Is Not Matched!",400))
    }

    const userExist = await User.findOne({phone})
    if(!userExist){
        return next(new createError("Invalid Details,Kindly Login Again!",400))
    }

    const isPasswordMatched = await userExist.comparePassword(password)

    if(!isPasswordMatched){
        return next(new createError("Invalid Details,Kindly Login Again!",400))
    }

    if(role != userExist.role){
        return next(new createError("User With This Role Not Found!",400))
    }
    generateToken(userExist,"Login Successfully!",200,res)
})


export const addNewAdmin = catchAsynchErrors(async(req,res,next)=>{
    const{firstName,lastName,email,phone,password,gender,dob,adharNumber} = req.body;

    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !adharNumber){
        return next(new createError("Kindly Enter The Full Form!",400));
    }
    const isRegistered = await User.findOne({phone})
    if(isRegistered){
        return next(new createError(`${isRegistered.role} Already Register, Kindly Login!`,400));
    }
    else{
        const adminData = new User({...req.body,role:"Admin"});
        const saveData = await adminData.save();
        res.status(200).json({
            success:true,
            messsage:"New Admin Registered!",
        })
    }
})