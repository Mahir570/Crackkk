// /api/index.js
const serverless = require('serverless-http');
const app = require('../app');  // Path to your express app file

module.exports = serverless(app);
