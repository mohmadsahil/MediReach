import { Message } from "../Models/messageSchema.js"

export const  sendMessage = async(req,res)=>{
    const {firstName,lastName,email,phone,message} = req.body;
    console.log(req.body);

    try {
        if(!firstName || !lastName || !email || !phone || !message)
            {
                return res.status(400).json({
                    Message:"Please Fill The Entire Form"
                })
            }
        else{
            const messageData = new Message(req.body);
            const saveData = await messageData.save();
            return res.status(200).json(saveData);
        }

    } catch (error) {
        res.status(500).json({error : error});
    }
    
}