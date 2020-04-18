"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    CONFIG_NAME: process.env.API_CONFIG_NAME || 'default-config',
    PORT: parseInt((_a = process.env.API_PORT) !== null && _a !== void 0 ? _a : '') ||
        parseInt((_b = process.env.PORT) !== null && _b !== void 0 ? _b : '') ||
        5000,
    ENVIRONMENT: process.env.NODE_ENV,
    LOG_ENABLED: process.env.API_LOG_ENABLED === 'true',
    API_KEY: process.env.API_KEY,
    API_WEATHER_DOMAIN: process.env.API_WEATHER_DOMAIN,
    API_TIME_DOMAIN: process.env.API_TIME_DOMAIN,
};
exports.default = config;
