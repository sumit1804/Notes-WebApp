import { Router } from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notes-controller.js";

const router = Router();


/* This route is to get all notes */
router.get("/", getAllNotes);

/* 
This route is to get note by id 
*/
router.get("/:id", getNoteById)

/*
This route is for adding new notes
    {
        "title":"title",
        "content":"content"
    }
 */
router.post("/addNote",createNote);

/* 
This route is for updating existed note
    {
        "title":"title",
        "content":"content"
    }
 */
router.put("/updateNote/:id", updateNote)

/*
This route is for deleting existed note
 */
router.delete("/delete/:id",deleteNote)

export default router;