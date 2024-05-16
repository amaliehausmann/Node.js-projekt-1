import express from "express";
import Artist from "../models/artist.model.js";

export const ArtistController = express.Router();

ArtistController.get('/artists', async (req, res) => {
    const data = await Artist.getAllArtists() 
    res.send(data)
});

ArtistController.get('/artists/:id([0-9A-Za-z]*)', async (req, res) => {
    const single = await Artist.getArtistById(req.params.id);
    res.send(single)
 });

 ArtistController.post('/artists', async (req, res) => {
    const data = await Artist.createArtist(req.body)
    res.send(data)
});