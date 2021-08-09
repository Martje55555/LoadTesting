var express = require('express');
var router = express.Router();
var { Svix } = require('svix');

const Config = require('../config.js');
const API_KEY = Config.API_KEY;
const svix = new Svix(API_KEY);
const app = Config.APP;

/* Create Message */
router.post('/', async (req, res, next) => {
  return await svix.message.create(app, {
    "eventType": "invoice.paid",
    "payload": {
      "status": "successful",
      "message": "test again again"
    }
  })
  .then (() => {
    res.send('Message Created!');
  })
    // .then(() => {
    //   res.send('message created!');
    // })
    // .catch(() => {
    //   res.send('error');
    // })
});

module.exports = router;
