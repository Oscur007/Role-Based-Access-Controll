import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";

dotenv.config();

const app=express();
const port = process.env.PORT || 7000;

dbConnection();

app.use(express.json())

app.listen(port , ()=>{
    console.log("Server is running");
})