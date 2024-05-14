import express from "express";
import Album from "../models/album.model.js";

export const AlbumController = express.Router();

AlbumController.get('/Albums', async (req, res) => {
    const data = await Album.getAllAlbums() 
    res.send(data)
});