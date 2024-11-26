import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function dbConnection()
{
    try
    {
        const dbConnect = await mongoose.connect(process.env.DB_URL);
        console.log("mongodb database connected");
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

export default dbConnection;