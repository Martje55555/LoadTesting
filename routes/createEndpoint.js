const express = require('express');
const router = express.Router();
const { Svix } = require('svix');

const Config = require('../config.js');
const API_KEY = Config.API_KEY;
const app = Config.APP;
const svix = new Svix(API_KEY);

// const jsonParser = bodyParser.json();
const jsonParser = express.json();

/* Create Application */
router.post('/', jsonParser, async (req, res, next) => {
  const endpointOut = await svix.endpoint.create(app, req.body)
  .catch((err) => {
    res.send(err);
  })
  res.send(endpointOut);
});

module.exports = router;
