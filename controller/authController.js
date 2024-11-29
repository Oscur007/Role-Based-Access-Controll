import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../model/userSchema.js";

dotenv.config();  // for using environment variables

const signup = async (req , res)=>{
    try
    {
        let oldUser=await User.findOne({email : req.body.email})  // checking if the user already exists in database using the email since it is unique
        if(oldUser)
        {
            return res.status(400).send("Email already exists");  // user already exists
        }
        const salt=await bcryptjs.genSalt(10);  // creating salt of length 10
        const secPass=await bcryptjs.hash(req.body.password , salt);  // adding the salt and hashing the password
        const newUser=new User({
            username : req.body.username,
            email : req.body.email,
            password : secPass,
            role : 'user'  // by default everyone is user
        })  // creating new user data
        await newUser.save();  // saving the data
        const data={
            user : {
                userid : newUser._id,
                username : newUser.username,
                role : newUser.role
            }
        }  // defining the data to be sent
        const authToken=jsonwebtoken.sign(data , process.env.JWT_SECRET , {expiresIn : "24h"});  // creating token to be sent which expires in 24 hours
        res.send({authToken}).status(200);  // sending the response
    }
    catch(err)
    {
        console.log(err);
        res.send("Error occured").status(500);  // error message
    }
}

const signin = async (req , res)=>{
    try
    {
        const oldUser=await User.findOne({email : req.body.email})  // finding user from database using the email since it is unique
        if(!oldUser)
        {
            return res.status(400).send("Please log in with correct details");  // here the user is not found
        }
        const passwordCompare = await bcryptjs.compare(req.body.password, oldUser.password);  // comparing passwords
        if(!passwordCompare)
        {
            return res.status(400).send("Please log in with correct details");  // here the user is found , but password is not matched
        }
        const data={
            user : {
                userid : oldUser._id,
                username : oldUser.username,
                role : oldUser.role
            }
        }  // defining the data to be sent
        const authToken=jsonwebtoken.sign(data , process.env.JWT_SECRET , {expiresIn : "24h"});  // creating the token to be sent which expires in 24 hours
        res.send({authToken}).status(200);  // sending the response
    }
    catch (error)
    {
        console.log(error);
        res.status(500).send("Internal Server Error");  // error message
    }
}

export {signin , signup}  // exporting the functions