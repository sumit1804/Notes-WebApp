import mongoose from "mongoose";

const Schema = mongoose.Schema;

const notesSchema = new Schema({
    title:{
        type: String,
        required:true,
        minlength:6
    },
    content:{
        type: String,
        required: true,
        minlength: 10
    },
    createdAt:{
        type:String,
        required:true
    },
    updatedAt:{
        type:String,
    }
})

export default mongoose.model("Note", notesSchema);