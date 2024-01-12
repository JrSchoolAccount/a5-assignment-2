import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (request, response) => {
  const buf = await fs.readFile('./static/index.html');
  const html = buf.toString();

  response.send(html);
});

app.get('/:page', async (request, response) => {
  const buf = await fs.readFile(request.params.page);
  const html = buf.toString();

  response.send(html);
});

app.use(
  '/static',
  express.static('./static', {
    extensions: ['html', 'htm'],
  })
);

app.listen(3080);
