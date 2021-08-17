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
  const message = await svix.message.create(app, {
    "eventType": "check.create",
    "payload": {
        "id": "chk_234",
        "object": "list",
        "next_url": "https://api.lob.com/v1/templates?limit=2&after=eyJkYXRlT2Zmc2V0IjoiMjAxOS0wMy0yOVQxMDoyMjozNC42NDJaIiwiaWRPZmZzZXQiOiJ0bXBsXzU5YjIxNTBhZTEyMDg4NyJ9",
        "previous_url": null,
        "count": 2,
      }
  })
  .catch((err) => {
    res.send(err);
  })
  res.json(message);
});

module.exports = router;
