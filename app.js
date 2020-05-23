const express = require('express');
const app = express();

const { add, subtract } = require('./calculator');

app.get('/add', (req, res) => {
  let { value1, value2 } = req.query;
  value1 = parseInt(value1);
  value2 = parseInt(value2);
  res.json({
    result: add(value1, value2),
  });
});

app.get('/subtract', (req, res) => {
  let { value1, value2 } = req.query;
  value1 = parseInt(value1);
  value2 = parseInt(value2);
  res.json({
    result: subtract(value1, value2),
  });
});

module.exports = app;
