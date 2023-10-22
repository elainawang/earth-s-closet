// content.js

const my_list = ["https://www2.hm.com/en_us/productpage.*.html", "https://www.patagonia.com/product/*", "https://www.nike.com/t/*", "https://www.zara.com/us/en/*", "https://www.forever21.com/us/*"]; // List of websites to check
// h&m, patagonia, nike, zara, forever21

// Get the current website's URL
const currentUrl = window.location.href;

// Check if the current website is in my_list
if (my_list.includes(currentUrl)) {
  // Search for specific keywords on the webpage
  const keywordsToSearchFor = ["wool", "polyester", "silk", "cotton", "leather"];
  const pageContent = document.body.textContent;

  // Check if any of the keywords are found in the page content
  for (const keyword of keywordsToSearchFor) {
    if (pageContent.includes(keyword)) {
      // Send a message to background.js to indicate that a keyword was found
      chrome.runtime.sendMessage({ type: "keywordFound" });
      break; // Stop searching once a keyword is found
    }
  }
}
