const axios = require('axios');
const config = require('../../config');

module.exports.getTime = getTime;

const protocol = 'http://';
const domain = config.API_TIME_DOMAIN;
const location = '/api';
const resource = '/json/utc/now'

function getTime() {
  return axios.get(`${protocol}${domain}${location}${resource}`);
}
