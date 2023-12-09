// src/routes/index.js
const express = require('express');
const router = express.Router();
const { fetchRssFeed } = require('../utils/rss');

router.get('/antara-news', async (req, res) => {
  try {
    const rssData = await fetchRssFeed('https://www.antaranews.com/rss/terkini.xml');
    res.json(rssData);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/republika', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('https://www.republika.co.id/rss');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

module.exports = router;
