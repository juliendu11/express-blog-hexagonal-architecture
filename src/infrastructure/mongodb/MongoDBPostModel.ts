import { Model, Schema, model } from "mongoose";

interface PostDocument  {
    id:string
    title:string
    text:string
    publishedAt:Date
}

const PostSchema = new Schema<PostDocument>({
    id:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    publishedAt:{
        type:Date,
        required:true
    }
})

const PostModel = model<PostDocument>('Post', PostSchema);

export {
    PostDocument,
    PostSchema,
    PostModel
}