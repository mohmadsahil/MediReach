import express from "express";
const app = express();
const PORT = 8080;

app.listen(PORT,(res,req)=>{
    console.log(`App is Listenig on PORT ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("Server is Activted");
})