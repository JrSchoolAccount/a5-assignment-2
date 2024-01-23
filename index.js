import express from 'express';
import fs from 'fs/promises';
import ejs from 'ejs';
import { loadMovie, loadMovies } from './static/movies.js';

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/om-oss', async (req, res) => {
  res.render('om-oss');
});

app.get('/biljetter', async (req, res) => {
  res.render('biljetter');
});

app.get('/evenemang', async (req, res) => {
  res.render('evenemang');
});

app.get('/filmer', async (req, res) => {
  try {
    const movies = await loadMovies();
    res.render('filmer', { movies });
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/filmer/:movieId', async (req, res) => {
  try {
    const movie = await loadMovie(req.params.movieId);
    res.render('film', { movie });
  } catch (error) {
    console.error(`Error fetching movie with ID ${req.params.movieId}:`, error);
    res.status(500).send('Internal Server Error');
  }
});

app.use('/static', express.static('./static'));

app.listen(5080);
