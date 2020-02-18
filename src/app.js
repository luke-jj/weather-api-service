const express = require('express');
const config = require('../config');
const { getWeather } = require('./services/weather');

const app = express();
const port = config.PORT;

require('./startup/config')();
require('./startup/middleware')(app);

app.get('/api/v1/weather', async (req, res) => {

  if (!req.query['city']) {
    return res.status(400).send('`city` is required.');
  }

  const { data: weather } = await getWeather(req.query['city']);

  res.send(weather);
});

app.listen(port, () => console.log(`Listening on ${port}...`));
