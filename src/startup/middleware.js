const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

module.exports = app => {
  app.use(morgan('tiny'));
  app.use(cors());
  app.use(helmet());
  app.use(compression());
};
