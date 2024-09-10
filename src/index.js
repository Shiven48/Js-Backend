import dotenv from "dotenv"
import connection from "./DB/connection.js";

dotenv.config({
    path: './env'
})

connection()

/*
import express from "express";
const app = express()

(async () => {
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`)
        app.on("error", (error) =>{
            console.log("Application not able to talk to database ",error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log(`ERROR: `,error)
    }
})()
*/