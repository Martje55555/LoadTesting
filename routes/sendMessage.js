const express = require('express');
const moment = require('moment');
const router = express.Router();
const { Svix } = require('svix');

const Config = require('../config.js');
const API_KEY = Config.API_KEY;
const svix = new Svix(API_KEY);
const app = Config.APP;

/* Create Message */
router.post('/', async (req, res, next) => {
  return await svix.message.create(app, {
    "eventType": "check.create",
    "payload": {
      "id": "chk_123",
      "description": "Demo Check",
      "date_created": moment.utc(),
      "object": "check"
    }
  })
  .then (() => {
    res.send('Message Created!');
  })
  .catch((err) => {
    res.send(err);
  })
    // .then(() => {
    //   res.send('message created!');
    // })
    // .catch(() => {
    //   res.send('error');
    // })
});

module.exports = router;
