const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(5000, () => {
  console.log('Express server is listening on port 5000.');
});