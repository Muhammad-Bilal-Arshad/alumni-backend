import express from 'express';
import { User } from '../models/user.model.js';
import { uploadOnCloduinary } from '../util/cloudinary.js';
const route = express.Router()

export const welcomeuser = (req,res) =>{
    res.send("HI")
}

export const showusers = async (req,res) =>{
    try{
        const users = await User.find()
        console
    res.json(users)
    }
    catch(error){
        console.log(error)
    }
}

export const adduser = async (req,res) =>{
    const{name, roll,quote, image} = req.body;
    console.log('name: ',name)
    console.log('image: ',image)
    const LocalPath = req.file?.path
    console.log("REQ FILES: ",req.file)
    if(!LocalPath){
        console.log("LOCAL PATH: ",LocalPath)
    }
    else{
        try{
            console.log("LOCAL PATH WORKING: ",LocalPath)
            const result = await uploadOnCloduinary(LocalPath);
            console.log(result)
           
                const newUser = new User ({
                    name,
                    roll,
                    quote,
                    image: result.url,
                })
        
                const savedUser = await newUser.save();
                res.status(201).json(savedUser);
            
        }
        catch(error){
    
            console.log(error)
        }

    }
  
}