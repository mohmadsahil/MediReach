import express from "express";
import { allgetMessage, sendMessage } from "../Controllers/messageController.js";
import { isAdminAuthenticated} from "../Middlewares/auth.js";

const router = express.Router();

router.post("/send",sendMessage);
router.get("/getallmsg",isAdminAuthenticated,allgetMessage);

export default router;