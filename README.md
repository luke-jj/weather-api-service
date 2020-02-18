# Weather API Service
A REST API Backend for various weather applications.

## Requirements
- [Node.js](https://nodejs.org/en/) version v12.15.0 or later,
- [NPM packet manager](https://npmjs.com) version 6.9.0 or later.

Required environment variables:

    export NODE_ENV=production
    export API_KEY=diuqi3dsh29jg0kd
    export API_DOMAIN=api.openweathermap.org

Optional environment variables:

    API_CONFIG_NAME
    API_LOG_ENABLED
    API_PORT

### Start The Application

Run `npm start` from the project root folder to start the REST API.

## API Documentation: Endpoints

    /api/v1/weather

Use the query string parameter `city` to get the weather for a particular city:

    /api/v1/weather?city=oslo

