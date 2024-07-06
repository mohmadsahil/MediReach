import express from "express"
import { bookAppoinment, deleteAppoinment, getAllAppoinments, updateAppoinmentStatus } from "../Controllers/appoinmentController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../Middlewares/auth.js";

const appoinmentRouter = express.Router();

appoinmentRouter.post("/send",isPatientAuthenticated,bookAppoinment);
appoinmentRouter.get("/allAppoinment",isAdminAuthenticated,getAllAppoinments);
appoinmentRouter.put("/update/:id",isAdminAuthenticated,updateAppoinmentStatus);
appoinmentRouter.delete("/delete/:id",isAdminAuthenticated,deleteAppoinment);

export default appoinmentRouter;