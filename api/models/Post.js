import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({

    title:{type:String,required:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    cat:{type:String,required:true},
    uid:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    username:{type:String,required:true}
},{timestamps:true})


export default mongoose.model('Post',PostSchema)