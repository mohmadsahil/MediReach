import mongoose from "mongoose";
import validator from "validator";

const messageSchema =  new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Contain At Least 3 Characters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"First Name Must Contain At Least 3 Characters!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Enter The Correct Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Please Enter The 10 Digit Phone Number"],
        maxLength:[10,"Please Enter The 10 Digit Phone Number"]
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message Must Contain At Least 10 Characters"],
        maxLength:[50,"Message Must Contain At Least 10 Characters"],
    },
})

export const Message = mongoose.model("Message",messageSchema);