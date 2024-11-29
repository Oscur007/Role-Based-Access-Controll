import express from "express";
import { signin , signup } from "../controller/authController.js";  // importing functions from authController.js

const authRouter = express.Router();  // creating router

authRouter.post("/signin" , signin)  // routing the functions
.post("/signup" , signup)

export default authRouter;  // exporting the router