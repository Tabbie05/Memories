import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCounts:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()

    }
})
const postModel = mongoose.model('postModel',postSchema)
export default postModel
