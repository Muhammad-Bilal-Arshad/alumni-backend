import express from 'express';
import { User } from '../models/user.model.js';
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dpm5sx80y', 
  api_key: '911877314611648', 
  api_secret: 'WqUQFNE95e3EcxqpNy--wOl_H4A' 
});
const route = express.Router()

export const welcomeuser = (req,res) =>{
    res.send("HI")
}

export const showusers = async (req,res) =>{
    try{
        const users = await User.find()
    res.json(users)
    }
    catch(error){
        console.log(error)
    }
}

export const adduser = async (req,res) =>{
    const{name, roll,quote, image} = req.body;
    try{
        const result = await cloudinary.uploader.upload(req.file.path);
        const newUser = new User ({
            name,
            roll,
            quote,
            image: result.secure_url,
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(error){

        console.log(error)
    }
}