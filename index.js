
const express = require('express');
const app = express();
const port = 8000;

const package = require('./package.json');

app.get('/health', (req, res) => {
  res.send(package);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
