import mongoose from "mongoose";
import { createError } from "../lib/createError.js";
import Post from '../models/Post.js'


export const getPosts = async(req,res,next)=>{


    


    try {
        const category = req.query.cat
if(!category){
    const posts = await Post.find()
    res.status(200).json(posts)
    
}else{
    const posts = await Post.find({cat:category})
    res.status(200).json(posts)
}


 
        
    } catch (error) {
        next(error)
    }
}


//get single post
export const getPost = async (req,res,next)=>{

    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)) return next(createError(404,'invalid post id'))

    
    try {

        const post = await Post.findById(id)

        if(!post) return next(createError(404,'no such post'))

        res.status(200).json(post)
        
    } catch (error) {
        next(error)
    }
}



//add a post
export const addPost = async (req,res,next)=>{
    
    const {title,desc,img,cat} = req.body
    if(!title || !desc || !img || !cat) return next(createError(405,'enter all information'))

    try {
        const post = await Post.create({title,desc,img,cat})

        res.status(201).json(post)
    } catch (error) {
        next(error)
    }
}


//delete a post
export const deletePost = async (req,res,next)=>{
const id = req.body.params
if(!mongoose.Types.ObjectId.isValid(id)) return next(createError(404,'invalid post id'))
    try {
        const post = Post.findByIdAndDelete(id)

        if(!post) return next(createError(404,'no such post'))

        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}



//update a post
export const updatePost = async (req,res,next)=>{


    try {
        
    } catch (error) {
        next(error)
    }

}