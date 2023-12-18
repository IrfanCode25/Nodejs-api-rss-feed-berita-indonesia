// src/routes/index.js
const express = require('express');
const router = express.Router();
const { fetchRssFeed } = require('../utils/rss');
const { formatData } = require('../utils/format');
const {endpoint} = require('../utils/endpoint');

endpoint.map((item) => {
  router.get(item.path, async (req, res) => {
    try {
      const rssData = await fetchRssFeed(item.url);
      const data = await formatData(rssData);
      res.json(data);
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
})

module.exports = router;
