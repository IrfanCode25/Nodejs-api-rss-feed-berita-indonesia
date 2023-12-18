
const formatData = async (rssData) => {
   const itemsArray = rssData[0]['item'].map(element => {
      return {
          'title': element['title'][0],
          'description': element['description'][0],
          'link': element['link'][0],
          'pubDate': element['pubDate'][0]
      };
  });
  
   new_json = {
         'status': 'success',
         'message': 'RSS feed fetched successfully',
         'data': {
            'title': rssData[0]['title'][0],
            'description': rssData[0]['description'][0],
            'link': rssData[0]['link'][0],
            'item': itemsArray
         }
      }
   return new_json
}

module.exports = { formatData }