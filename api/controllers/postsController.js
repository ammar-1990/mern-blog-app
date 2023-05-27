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
console.log(post)
        if(!post) return next(createError(404,'no such post'))

        res.status(200).json(post)
        
    } catch (error) {
        next(error)
    }
}



//add a post
export const addPost = async (req,res,next)=>{
    
    const {title,value,imageUrl,cat,username} = req.body

    if(!title || !value || !imageUrl || !cat ) return next(createError(405,'enter all information'))
    

    try {
        const post = await Post.create({title,desc:value,img:imageUrl,cat,uid:req.id,username})

        res.status(201).json(post)
    } catch (error) {
        next(error)
    }
}


//delete a post
export const deletePost = async (req,res,next)=>{
const id = req.params.id 


if(!mongoose.Types.ObjectId.isValid(id)) return next(createError(404,'invalid post id'))

    try {

        const toCheck =await Post.findById(id)
     

        if(req.id!==toCheck.uid.toString())return next(createError(401,'you are not authorized to delete this post'))

        const post =await Post.findByIdAndDelete(id)

        if(!post) return next(createError(404,'no such post'))

        res.status(200).json(post)
    } catch (error) {
        next(error)
    }
}



//update a post
export const updatePost = async (req,res,next)=>{

    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)) return next(createError(404,'invalid post id'))
  const post = req.body

    try {
        const toCheck = await Post.findById(id)
        if(!toCheck) return next(createError(404,"no such post"))
        if(req.id!==toCheck.uid.toString())return next(createError(401,'you are not authorized to delete this post'))
      const newPost = await  Post.findByIdAndUpdate(id, post, { new: true })
      res.status(201).json(newPost)
    } catch (error) {
        next(error)
    }

}