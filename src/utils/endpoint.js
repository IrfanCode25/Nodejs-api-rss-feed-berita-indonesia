const endpoint = [
   {
      path : '/antara-news',
      url : 'https://www.antaranews.com/rss/terkini.xml'
   },
   {
      path : '/republika',
      url : 'https://www.republika.co.id/rss'
   },
   {
      path : '/coconuts',
      url : 'http://coconuts.co/jakarta/feed/'
   },
   {
      path : '/vice-id',
      url : 'https://www.vice.com/id/rss?locale=id_id'
   },
   {
      path : '/suara',
      url : 'https://www.suara.com/rss/news'
   },
   {
      path : '/tempo',
      url : 'https://rss.tempo.co/nasional'
   },
   {
      path : '/cnn-indonesia',
      url : 'https://www.cnnindonesia.com/nasional/rss'
   },
   {
      path : '/cnbc-indonesia',
      url : 'https://www.cnbcindonesia.com/news/rss'
   },
   {
      path : '/mediaindonesia',
      url : 'https://mediaindonesia.com/feed'
   },
   {
      path : '/kumparan',
      url : 'https://lapi.kumparan.com/v2.0/rss/'
   }
]

const onlyPath = endpoint.map((item) => {
   return 'https://nodejs-rss-feed-berita-indonesia-api.vercel.app/api'+ item.path
})

module.exports = {
   endpoint,
   onlyPath
}