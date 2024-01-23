import express from 'express';
import fs from 'fs/promises';
import ejs from 'ejs';

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
  res.render('filmer');
});

app.use('/static', express.static('./static'));

app.listen(5080);
