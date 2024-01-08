import mongoose from "mongoose";

    
const UserSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    roll:{
        type: String,
        required: true
    },
    quote:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }

})

export const User = mongoose.model ("User",UserSchema)