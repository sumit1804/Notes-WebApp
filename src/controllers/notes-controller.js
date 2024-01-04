import Note from "../models/Note.js";


export const getAllNotes = async (req,res,next) => {
    try{
        const allNotes = await Note.find();
        if(allNotes.length == 0){
            return res.status(404).json({
                message:"No Notes found"
            });
        }
        return res.status(200).json({
            allNotes:allNotes
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"internal server error..."
        })
    }
}

// export const createNotes = async (req,res,next) => {
//     try{
//         const { title, content} = req.body;
//         const note = new Note
//     }
// }