import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
  const buf = await fs.readFile('./static/index.html');
  const html = buf.toString();

  res.send(html);
});

app.get('/:page', async (req, res) => {
  const buf = await fs.readFile('./static/' + req.params.page + '.html');
  const html = buf.toString();

  res.send(html);
});

app.use('/static', express.static('./static'));

app.listen(3080);
