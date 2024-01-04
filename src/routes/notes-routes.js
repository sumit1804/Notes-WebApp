import { Router } from "express";
import { getAllNotes } from "../controllers/notes-controller.js";

const router = Router();


/* This route is to get all notes */
router.get("/", getAllNotes);



export default router;