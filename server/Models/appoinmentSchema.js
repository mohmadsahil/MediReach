import mongoose from mongoose;
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Contain At Least 3 Characters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name Must Contain At Least 3 Characters!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Provide A Valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone Number Must Contain Exact 10 Digits"],
        maxLength:[10,"Phone Number Must Contain Exact 10 Digits"]
    },
    adharNumber:{
        type:String,
        required:true,
        minLength:[12,"Adhar Number Must Contain Exact 12 Digits"],
        maxLength:[12,"Adhar Number Must Contain Exact 12 Digits"]
    },
    dob:{
        type:Date,
        required:[true,"DOB Is Required"]
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Others"]
    },
    appoinment_date:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    doctor:{
        firstName:{
            type:String,
            required:true,
            minLength:[3,"First Name Must Contain At Least 3 Characters!"]
        },
        lastName:{
            type:String,
            required:true,
            minLength:[3,"Last Name Must Contain At Least 3 Characters!"]
        },
    },
    hasVisited:{
        type:Boolean,
        required:true,
    },
    doctor_id:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    patient_id:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["pending","Accepted","Rejected"],
        default:"Pending"
    }
})
    
export const Appointment = mongoose.model("Appointment",appointmentSchema);