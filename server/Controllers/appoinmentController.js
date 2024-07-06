import { catchAsynchErrors } from "../Middlewares/catchAsyncErrors.js";
import createError from "../Middlewares/errorMiddleware.js";
import { Appointment } from "../Models/appoinmentSchema.js";
import { User } from "../Models/userSchema.js";


export const bookAppoinment = catchAsynchErrors(async(req,res,next)=>{
    const {firstName,lastName,email,phone,adharNumber,dob,gender,appoinment_date,department,doctor_firstName,doctor_lastName,hasVisited,address} = req.body;
    
    if(!firstName || !lastName || !email || !phone || !adharNumber || !dob || !gender || !appoinment_date || !department || !doctor_firstName || !doctor_lastName || !address){
        return next(new createError("Kindly Enter The Full Form!",400));
    }

    const isConflict = await User.find({
        firstName:doctor_firstName,
        lastName:doctor_lastName,
        role:"Doctor",
        doctorDepartment:department,
    })

    if(isConflict.length === 0){            //two or more doctor can be occur with same details so just check it once
        return next(new createError("Doctor Not Found!",400));
    }

    if(isConflict.length>1){
        return next(new createError("Doctors Conflict! Please Contact Through Email Or Phone!",400));
    }

    const doctorId = isConflict[0]._id;
    const patientId = req.user._id;

    const bookAppoinmentData = new Appointment({
        firstName,
        lastName,
        email,
        phone,
        adharNumber,
        dob,
        gender,
        appoinment_date,
        department,
        doctor:{
            firstName:doctor_firstName,
            lastName:doctor_lastName,
        },
        hasVisited,
        address,
        patientId,
        doctorId
    });
    const saveData = await bookAppoinmentData.save();
    res.status(200).json({
        success:true,
        message:"Appoinment Has Been Send Booked Kindly Wait For Approvement!",
    })
})


export const getAllAppoinments = catchAsynchErrors(async(req,res,next)=>{
    const allAppoinments = await Appointment.find();
    res.status(200).json({
        success:true,
        allAppoinments,
    })
})

export const updateAppoinmentStatus = catchAsynchErrors(async(req,res,next)=>{
    const {id} = req.params;
    let getAppoinment = await Appointment.findById(id);
    if(!getAppoinment){
        return next (new createError("No Appoinment!"));
    }
    getAppoinment = await Appointment.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({
        success:true,
        message:"Appoinment Status Has Been Updated!",
        getAppoinment
    })
})

export const deleteAppoinment = catchAsynchErrors(async(req,res,next)=>{
    const {id} = req.params;
    let getAppoinment = await Appointment.findById(id);
    if(!getAppoinment){
        return next (new createError("No Appoinment!",400));
    }
    await Appointment.deleteOne()
    res.status(200).json({
        success:true,
        message:"Appoinment Status Has Been Deleted!",
    })
}) 