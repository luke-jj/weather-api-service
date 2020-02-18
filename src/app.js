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

  try {
    const { data: weather } = await getWeather(req.query['city']);
    return res.send(weather);
  } catch (ex) {
    if (ex.response && ex.response.status === 404) {
      return res.status(404).send('City not found.');
    }

    return res
      .status(500)
      .send('Something went wrong while collecting weather data.');
  }
});

app.listen(port, () => console.log(`Listening on ${port}...`));
