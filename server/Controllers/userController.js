import { catchAsynchErrors } from "../Middlewares/catchAsyncErrors.js";
import createError from "../Middlewares/errorMiddleware.js";
import { User } from "../Models/userSchema.js";
import {generateToken} from "../Utils/jwtTokens.js";
import cloudinary from "cloudinary";


//API For Patient Register

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
        const userData = new User(req.body);
        const saveData = await userData.save();
        generateToken(userData,"User Has Been Register Successfully!",200,res)
    }
})

// API For Admin and Patient login

export const Login = catchAsynchErrors(async(req,res,next)=>{
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


//API For Add New Admin

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

//API For Get All Doctors

export const getAllDoctors = catchAsynchErrors(async(req,res,next)=>{
    const finddoctor = await User.find({role:"Doctor"});
    res.status(200).json({
        success:true,
        finddoctor,
    });
})

//API For Get All Users

export const getUserDetails = catchAsynchErrors(async(req,res,next)=>{
    const user = req.user;    //to store information about the authenticated user.
    res.status(200).json({
        success:true,
        user,
    })
}) 

//API For Logout Admin

export const logoutAdmin = catchAsynchErrors(async(req,res,next)=>{
    res.status(200).cookie("adminToken","",{
        httpOnly:true,
        expires: new Date(Date.now())
    }).json({
        success:true,
        messsage:"LogOut Successfully!"
    })
})

//API For Logout Patient

export const logoutPatient = catchAsynchErrors(async(req,res,next)=>{
    res.status(200).cookie("patientToken","",{
        httpOnly:true,
        expires: new Date(Date.now())
    }).json({
        success:true,
        messsage:"LogOut Successfully!"
    })
})

//API For Add New Doctor

export const addNewDoctor = catchAsynchErrors(async(req,res,next)=>{
    if(!req.files || Object.keys(req.files).length ===0){
        return next(new createError("Doctor Image's Required!"));
    }
    const {docAvatar} = req.files;
    const allowedFormats = ["image/png","image/jpg","image/webp"];

    if(!allowedFormats.includes(docAvatar.mimetype)){    //mimetype is a format of a document, file
        return next(new createError("File Format Not Supported",400));
    }
    const{firstName,lastName,email,phone,password,gender,dob,adharNumber,doctorDepartment} = req.body;
    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !adharNumber || !doctorDepartment){
        return next(new createError("Kindly Enter The Full Details!",400));
    }
    const isRegistered = await User.findOne({phone});
    if(isRegistered){
        return next(new createError(`${isRegistered.role}, Already Registered!}`));
    }

    //Uplaoding the Image on Cloudinary

    const cloudinaryImage = await cloudinary.uploader.upload(docAvatar.tempFilePath);
    if(!cloudinaryImage || cloudinaryImage.error){
        console.error("Cloudinary Error",cloudinaryImage.error || "Unknown Cloudinary Error")
    }
    const doctor = await new User({...req.body,role:"Doctor",docAvatar:{
        public_id: cloudinaryImage.public_id,
        url: cloudinaryImage.secure_url,
    }});
    const saveData = await doctor.save();
    res.status(200).json({
        success:true,
        messsage:"New Doctor Has Been Register!",
        doctor
    })
})