import express from "express";
import Artist from "../models/artist.model.js";

export const ArtistController = express.Router();

ArtistController.get('/artists', async (req, res) => {
    const data = await Artist.getAllArtists() 
    res.send(data)
});