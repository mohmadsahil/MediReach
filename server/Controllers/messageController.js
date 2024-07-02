import { Message } from "../Models/messageSchema.js"

export const  sendMessage = async(req,res)=>{
    const {firstName,lastName,email,phone,message} = req.body;

    try {
        if(!firstName || !lastName || !email || !phone || !message)
            {
                return res.status(400).json({
                    Message:"Please Fill The Entire Form"
                })
            }
        // else{
        //     const messageData = new Message({firstName:firstName,lastName:lastName,email:email,phone:phone})
        //     const saveData = await messageData.save();
        //     return res.status(200).json(saveData);
        // }
        await Message.create({firstName:firstName,lastName:lastName,email:email,phone:phone,message:message})
        res.send(200).json({
            success:true,
            message:"Message Send!"
        })

    } catch (error) {
        res.status(500).json({error : error});
    }
    
}