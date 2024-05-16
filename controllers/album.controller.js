import express from "express";
import Album from "../models/album.model.js";

export const AlbumController = express.Router();

AlbumController.get('/Albums', async (req, res) => {
    const data = await Album.getAllAlbums() 
    res.send(data)
});

AlbumController.get('/albums/:id([0-9A-Za-z]*)', async (req, res) => {
    const single = await Album.getAlbumById(req.params.id);
    res.send(single)
 });