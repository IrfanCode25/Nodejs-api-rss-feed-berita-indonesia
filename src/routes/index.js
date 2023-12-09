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

 router.get('/coconuts', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('http://coconuts.co/jakarta/feed/');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

 router.get('/vice-id', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('https://www.vice.com/id/rss?locale=id_id');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

 router.get('/suara', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('https://www.suara.com/rss/news');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

 router.get('/tempo', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('https://rss.tempo.co/nasional');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

 router.get('/cnn-indonesia', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('https://www.cnnindonesia.com/nasional/rss');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

 router.get('/cnbc-indonesia', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('https://www.cnbcindonesia.com/news/rss');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

 router.get('/mediaindonesia', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('https://mediaindonesia.com/feed');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

 router.get('/kumparan', async (req, res) => {
   try {
     const rssData = await fetchRssFeed('https://lapi.kumparan.com/v2.0/rss/');
     res.json(rssData);
   } catch (error) {
     console.error('Error fetching RSS feed:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });

module.exports = router;
