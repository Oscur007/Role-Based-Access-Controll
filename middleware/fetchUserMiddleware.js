import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();

const fetchuser = (req, res, next) => {
    const token=req.header("auth-token");  // getting the token from request header
    if (!token)
    {
        res.status(200).send({ error: "Please authenticate using a valid token" })  // token is not present
    }
    try
    {
        const data = jsonwebtoken.verify(token, process.env.JWT_SECRET);  // verifying if the user is authenticated
        req.user = data.user;
        next();  // passing the pass of execution to the next function
    }
    catch (error)
    {
        console.log(error)
        res.status(402).send({ error: "Please authenticate using a valid token" })  // false token is provided
    }
}

export default fetchuser;