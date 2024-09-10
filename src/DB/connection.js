import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connection = async () => {
    try{
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected Successful with MONGODB: `,connect.connection.host);
        console.log(connect)
    }
    catch(error)
    {
        console.log(`Error while connecting MONGODB `,error);
        process.exit(1);
    }
}

export default connection;