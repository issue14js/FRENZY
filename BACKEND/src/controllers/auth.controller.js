import userModel from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


async function registerUser(req,res){
    try{
        const {username,number,password} = req.body;
        const existingUser = await userModel.findOne(
            $or [
                { username: username },
                { number: number }
            ]
        )
        if(existingUser){
            return res.status(400).json({message:"User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await userModel.create({
            username,
            number,
            password:hashedPassword,
        })
        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:"1h"})
        cookieStore.set("token",token)
        return res.status(201).json({
            message:"User registered succsessfully",
            newUser:{
                id:newUser._id,
                username:newUser.username,
                number:newUser.number,
            },
        })

    }catch(error){
        console.error("Error registering user:",error),
        res.status(500).json({message:"Internal server error"})

    }
}

export {registerUser}