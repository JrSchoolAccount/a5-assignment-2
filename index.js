import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
  const buf = await fs.readFile('./static/index.html');
  const html = buf.toString();

  res.render(html);
});

app.get('/:page', async (req, res) => {
  const buf = await fs.readFile(req.params.page);
  const html = buf.toString();

  res.render(html);
});

app.use(
  '/static',
  express.static('./static', {
    extensions: ['html', 'htm'],
  })
);

app.listen(3080);
