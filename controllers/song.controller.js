import express from "express";
import Song from "../models/song.model.js";

export const SongController = express.Router();

SongController.get('/songs', async (req, res) => {
    const data = await Song.getAllRecords(); 
    res.send(data)
});

SongController.get('/songs/:id([0-9A-Za-z]*)', async (req, res) => {
    const single = await Song.getRecordById(req.params.id);
    res.send(single)
 });