import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config()
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

console.log("API KEY: ",process.env.API_KEY)
export const uploadOnCloduinary = async (localFilePath) =>{
    try{
        if(!localFilePath)return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:  "auto"
        })
        console.log("File uploaded: ",response.url);
        return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath)
        console.log("ERROR: ",error)

    }
}

