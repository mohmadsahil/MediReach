import { Message } from "../Models/messageSchema.js"
import { catchAsynchErrors } from "../Middlewares/catchAsyncErrors.js";
import createError from "../Middlewares/errorMiddleware.js";

export const  sendMessage = catchAsynchErrors(async(req,res,next)=>{         //handling the error through catchAsynchErrors Middleware
    const {firstName,lastName,email,phone,message} = req.body;          // so that is why we don't need to use try-catch

        if(!firstName || !lastName || !email || !phone || !message)
            {
                return next(new createError("Please Enter The Full Details In From",400))
            }
        else{
            const messageData = new Message(req.body);
            const saveData = await messageData.save();
            return res.status(200).json({
                success:true,
                message:"Message Has Been Send Successfully!",
            });
        }
})