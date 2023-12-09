// src/utils/rss.js
const axios = require('axios');
const { parseString } = require('xml2js');

// const rssFeedUrl = 'https://www.antaranews.com/rss/terkini.xml'; // Ganti dengan URL RSS feed yang sesuai

async function fetchRssFeed(rssFeedUrl) {
  try {
    const response = await axios.get(rssFeedUrl);
    const xmlData = response.data;

    return new Promise((resolve, reject) => {
      parseString(xmlData, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err);
          reject(err);
          return;
        }

        resolve(result.rss.channel);
      });
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    throw error;
  }
}

module.exports = { fetchRssFeed };
