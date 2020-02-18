const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const config = require('../config');
const { getWeather } = require('./services/weather');

if (!config.KEY) {
  throw new Error('API_KEY must be set.');
}

const app = express();
const port = config.PORT;

app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(compression());

app.get('/api/v1/weather', async (req, res) => {

  if (!req.query['city']) {
    return res.status(400).send('`city` is required.');
  }

  const { data: weather } = await getWeather(req.query['city']);

  res.send(weather);
});

app.listen(port, () => console.log(`Listening on ${port}...`));
