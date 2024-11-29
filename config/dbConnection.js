import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();  // for using environment variable

// function for database connection
async function dbConnection()
{
    try
    {
        const dbConnect = await mongoose.connect(process.env.DB_URL);  // connecting mongodb database
        console.log("mongodb database connected");
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

export default dbConnection;  // exporting the function