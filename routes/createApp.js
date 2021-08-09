const express = require('express');
const router = express.Router();
const { Svix } = require('svix');

const Config = require('../config.js');
const API_KEY = Config.API_KEY;

const svix = new Svix(API_KEY);

const jsonParser = express.json();

/* Create Application */
router.post('/', jsonParser, async (req, res, next) => {
  const applicationOut = await svix.application.create({
    "uid": req.body.uid,
    "name": req.body.name,
    "rateLimit": req.body.rateLimit
  })
  .then (() => {
    res.send(applicationOut);
  })
  .catch((err) => {
    res.send(err);
  })
});

module.exports = router;
