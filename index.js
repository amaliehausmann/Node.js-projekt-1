import express from 'express'
const app = express()
import dotenv from 'dotenv';
import Song from './models/song.model.js';
import Artist from './models/artist.model.js';
import Album from './models/album.model.js';

dotenv.config();

const port = process.env.PORT_NUMBER;

const api_key = process.env.SUPABASE_KEY;

app.get('/', (request, response) => {
response.send('Forside');
})

app.get('/About', (request, response) => {
    response.send('Hvem er vi');
})

app.get('/Work', (request, response) => {
    response.send('Hvad kan vi');
})

app.get('/Find', (request, response) => {
    response.send('Find os');
})

app.get('/Productlist', (request, response) => {
    response.send('Produkt liste');
})

app.get('/Productdetails', (request, response) => {
    response.send('Produkt detaljer');
})

app.get('/Contact', (request, response) => {
    response.send('Kontakt side');
})


app.post('/', (request, response) => {
    response.send('Endpoint til POST')
    })

app.listen(port, () => {
    console.log('Webserver is running now on http://localhost:' + port);
})

import { supabase } from './config/supabase_config.js';

app.get('/sange', async (request, response) => {

    let { data, error } = await supabase.from('songs').select('id, title')
    if (error) {
        throw new Error(error.message);
    } else {
        response.send(data)
    }
})

app.get('/artists', async (request, response) => {

    let { data, error } = await supabase.from('artists').select('id, name, description, image, created_at, updated_at')
    if (error) {
        throw new Error(error.message);
    } else {
        response.send(data)
    }
})

app.get('/albums', async (request, response) => {

    let { data, error } = await supabase.from('albums').select('title, image, artists(name)')
    if (error) {
        throw new Error(error.message);
    } else {
        response.send(data)
    }
})

app.get('/test', async (req, res) => {
    const data = await Song.getAllRecords()
    res.send(data)
})

app.get('/artist', async (req, res) => {
    const data = await Artist.getAllArtists()
    res.send(data)
})

app.get('/album', async (req, res) => {
    const data = await Album.getAllAlbums()
    res.send(data)
})



// error handling
app.get('*', (request, response) => {
    response.status(404).send('404 - Siden blev ikke fundet');
  });

