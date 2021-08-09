const express = require('express');
const router = express.Router();
const { Svix } = require('svix');

const Config = require('../config.js');
const API_KEY = Config.API_KEY;
const svix = new Svix(API_KEY);

/* Create Event */
router.post('/', async (req, res, next) => {
  return await svix.eventType.create( {
    "description": "A letter has been created",
    "name": "check.create"
  })
  .then (() => {
    res.send('Event Created!');
  })
  .catch(() => {
    res.send('error');
  })
});

module.exports = router;
