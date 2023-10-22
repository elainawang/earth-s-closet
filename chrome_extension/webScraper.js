const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

chrome.tabs.query({'active':true, 'lastFocusedWindow':true}, function(tabs) {
    var my_url = tabs[0].url;
    document.getElementById("host").innerHTML = url;
});

const url = my_url; // Replace with the URL you want to scrape
const outputFileName = 'scrapedData.json';

axios.get(url)
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      // Extract the data you want
      const scrapedData = [];

      // Example: Scraping all the links on the page
      $('p').each((index, element) => {
        scrapedData.push($(element).attr('href'));
      });

      // Save the data to a JSON file
      fs.writeFileSync(outputFileName, JSON.stringify(scrapedData, null, 2));
      console.log(`Scraped data saved to ${outputFileName}`);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
