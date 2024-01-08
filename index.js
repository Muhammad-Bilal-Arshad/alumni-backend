import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME } from './src/util/constants.js';
import userRouter from './src/routes/routes.js'
const app = express();
dotenv.config();

app.use(cors())

app.use('/api',userRouter)
;(async () =>{
    try{
        const connectionInsance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
            console.log(`MONGO DB CONNECTION HOST: ${connectionInsance.connection.host}`)
        app.on('error',()=>{
            console.log(error)
            throw error
        })
    }
    catch (error){
        console.log(error)
    }
})()

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`PORT OF SERVER: ${PORT}`)
})