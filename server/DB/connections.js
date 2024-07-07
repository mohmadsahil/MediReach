import mongoose from "mongoose";

export const DBConnection = ()=>{
     mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("DataBase is Connected Successfully");
    })
    .catch((err)=>{
        console.log(err);
        console.log("Some Error Occured kindly Fix it !");
    })
}


