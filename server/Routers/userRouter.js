import express from "express"
import { addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails, Login, logoutAdmin, logoutPatient, patientRegister } from "../Controllers/userController.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../Middlewares/auth.js";

const useRouter = express.Router();

useRouter.post("/patient/register",patientRegister);
useRouter.post("/login",Login);
useRouter.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
useRouter.get("/doctors",getAllDoctors);
useRouter.get("/admin/me",isAdminAuthenticated,getUserDetails);
useRouter.get("/patient/me",isPatientAuthenticated,getUserDetails);
useRouter.get("/admin/logout",isAdminAuthenticated,logoutAdmin);
useRouter.get("/patient/logout",isPatientAuthenticated,logoutPatient);
useRouter.post("/doctor/addnew",isAdminAuthenticated,addNewDoctor);


export default useRouter;
