import express from "express"
import { addNewAdmin, patientLogin, patientRegister } from "../Controllers/userController.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../Middlewares/auth.js";

const useRouter = express.Router();

useRouter.post("/patient/register",patientRegister);
useRouter.post("/login",patientLogin);
useRouter.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);

export default useRouter;
