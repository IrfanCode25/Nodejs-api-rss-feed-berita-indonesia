// src/server.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { onlyPath } = require('./utils/endpoint');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  return res.send({
    develop: '@irfancode25',
    github: 'https://github.com/IrfanCode25/Nodejs-rss-feed-berita-indonesia-api',
    endpoints: onlyPath,
  });
});
app.use('/api', routes);

app.all('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
