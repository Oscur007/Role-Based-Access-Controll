import express from "express";
import { users , moderator , admin } from "../controller/userController.js";  // importing functions from userController.js
import fetchuser from "../middleware/fetchUserMiddleware.js";
import roleCheck from "../middleware/roleBasedMiddleWare.js";

const userRouter = express.Router();  // creating router

// routing the functions
userRouter.get("/user" , fetchuser , users)  // everyone can access after authentication
.get("/moderator" , fetchuser , roleCheck(["moderator" , "admin"]) , moderator)  // only moderators and admin can access after authentication
.get("/admin" , fetchuser , roleCheck(["admin"]) , admin)  // only admin can access after authentication

export default userRouter;  // exporting the router