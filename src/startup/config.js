const config = require('../../config');

module.exports = () => {

  if (!config.API_KEY) {
    throw new Error('API_KEY must be set.');
  }

  if (!config.API_DOMAIN) {
    throw new Error('API_DOMAIN must be set.');
  }
};
