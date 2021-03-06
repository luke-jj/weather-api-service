const express = require('express');
const config = require('../config');
const { getWeather } = require('./services/weather');
const { getTime } = require('./services/time');

const app = express();
const port = config.PORT;

require('./startup/config')();
require('./startup/middleware')(app);

app.get('/api/v1/weather', async (req, res) => {

  if (!req.query['city']) {
    return res.status(400).send('Query string parameter `city` is required.');
  }

  if (!/^[0-9A-Za-z .,]{1,42}$/.test(req.query['city'])) {
    return res.status(400).send('Illegal city name.');
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

app.get('/api/v1/time', async (req, res) => {
  try {
    const { data } = await getTime();

    // convert filetime to unix timestamp
    const datestring = data.currentFileTime.toString();
    const fileTime = parseInt(datestring.slice(0, -4));
    const epoch = Date.UTC(1601,0,1);
    const utcMiliseconds = epoch + fileTime;
    const utcSeconds = parseInt(utcMiliseconds.toString().slice(0, -3));

    return res.send({ currentUnixTime: utcSeconds });
  } catch (ex) {
    return res
      .status(500)
      .send('Something went wrong while collecting time data.');
  }
});

app.listen(port, () => console.log(`Listening on ${port}...`));
