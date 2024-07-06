import express, { Router, urlencoded } from "express";
import { config } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import {DBConnection} from "./DB/connections.js";
import cloudinary from "cloudinary";
import router from "./Routers/messageRouter.js";
import { errorMiddleware } from "./Middlewares/errorMiddleware.js";
import useRouter from "./Routers/userRouter.js";
import appoinmentRouter from "./Routers/appoinmentRouter.js";

const app = express();

config({path :"./config/config.env"});          //Connect to the confiq file

app.use(cors({
    origin:[process.env.FRONTENT_URL,process.env.DASHBOARD_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

//Middlewares

app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}));
app.use(express.json());
app.use("/api/message",router);
app.use("/api/user",useRouter);
app.use("/api/appoinment",appoinmentRouter);

DBConnection();     //Database Connected

app.listen(process.env.PORT,(res,req)=>{
    console.log(`App is Listenig on PORT ${process.env.PORT}`);
})

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

app.use(errorMiddleware);