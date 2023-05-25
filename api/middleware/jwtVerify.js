import  jwt  from "jsonwebtoken";
import { createError } from "../lib/createError.js";



export const jwtVerify = async(req,res,next)=>{


    const token = req.cookies.accessToken;

    if(!token) return next(createError(401,"not authenticated"))

    jwt.verify(token,process.env.JWT_SECRET,async(err,payload)=>{
if(err) return next(createError(401,'token is not valid'))

req.id = payload.id
req.name = payload.name
req.email = payload.email

    })
    next()
} 