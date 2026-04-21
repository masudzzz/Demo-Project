const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Masud! Docker App Running 🚀');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});