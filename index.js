import express from "express";
import mongoose from "mongoose";
import notesRoutes from "./src/routes/notes-routes.js";


const app = express();

app.use(express.json());

app.use("/api/notes", notesRoutes);

mongoose.connect(
    "mongodb+srv://admin:N5FRSKW1uDhAomUp@notes.fgt3pt4.mongodb.net/?retryWrites=true&w=majority"
).then(() => app.listen(5000))
.then(() => console.log("Connected to Database"))
.catch((err) => console.log(err));



// N5FRSKW1uDhAomUp