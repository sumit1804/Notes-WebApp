import Note from "../models/Note.js";


// function to get all the notes from database
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

// function to get note by id
export const getNoteById = async(req,res) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        if(!note){
            return res.status(404).json({
                message:"note not found"
            })
        }
        return res.status(200).json({
            note:note,
            message:"note found successfully"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:"internal server error..."
        })
    }
}

// function to create new notes in database
export const createNote = async (req,res,next) => {
        try{
            const { title, content} = req.body;
            if(title.length < 8){
                return res.status(400).json({
                    message:"title length too small"
                })
            }
            if(content.length < 20){
                return res.status(400).json({
                    message:"content is very less"
                })
            }
            const note = new Note({
                title:title,
                content:content,
                createdAt:new Date()
            })
            await note.save();
            return res.status(200).json({
                note:note,
                message:"note created successfully"
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                message:"internal server error..."
            })
        }
    }

export const updateNote = async(req,res)=>{
    try {
        const {content} = req.body;
        const noteId = req.params.id;
        const note = await Note.findByIdAndUpdate(noteId,{
            content:content,
            updatedAt:new Date()
        })
        if(!note){
            return res.status(404).json({
                message:"Unable to update note"
            })
        }
        const updatedNote = await Note.findById(noteId);
        return res.status(200).json({
            note:updatedNote,
            message:"note updated successfully"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:"internal server error..."
        })
    }
}

export const deleteNote = async(req,res)=>{
    try {
        const id = req.params.id;
        const note = await Note.findByIdAndDelete(id);
        if(!note){
            return res.status(404).json({
                message:"unable to delete note"
            })
        }
        return res.status(200).json({
            note:note,
            message:"note deleted successfully"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message:"internal server error..."
        })
    }
}