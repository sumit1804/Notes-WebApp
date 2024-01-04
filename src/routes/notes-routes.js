import { Router } from "express";
import { createNotes, getAllNotes } from "../controllers/notes-controller.js";

const router = Router();


/* This route is to get all notes */
router.get("/", getAllNotes);

/*
This route is for adding new notes
    {
        "title":"title",
        "content":"content"
    }
 */
router.post("/addNotes",createNotes);

export default router;