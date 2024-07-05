import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userSchema = new mongoose.Schema({
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
    password:{
        type:String,
        required:true,
        minLength:[8,"Password Must Contain Minimum 8 Digits"],
        // select:false,
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","patient","Doctor"],
    },
    department:{
        type:String,
    },
    docAvatar:{
        public_id:String,
        url:String
    }
});

// Pre-save middleware to hash the password

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,12);
});

userSchema.methods.comparePassword = async function (enteredPassword){     //methods to compare password
    return await bcrypt.compare(enteredPassword,this.password);
};

userSchema.methods.generateJWT = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{            //JWT Token Generate(Payload,SecretKey)
        expiresIn: process.env.JWT_EXPIRES,                                    //Expire Time
    });
}

export const User = mongoose.model("User",userSchema);