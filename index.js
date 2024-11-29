//importing necessary dependencies
import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";
import authRouter from "./route/authRoute.js";
import userRouter from "./route/userRoute.js";

dotenv.config();  // for using environment variables

const app=express();  // creating express app
const port = process.env.PORT || 7000;  // defining port

dbConnection(); // connecting to the database

app.use(express.json())
// adding the routes
app.use("/api/auth" , authRouter)
app.use("/api/users" , userRouter)

// binding the server to the port
app.listen(port , ()=>{
    console.log("Server is running");
})