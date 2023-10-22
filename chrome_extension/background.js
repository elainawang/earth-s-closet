chrome.runtime.onInstalled.addListener(() => {
    // Set an initial value in extension storage
    chrome.storage.sync.set({ keywordFound: false });
});

// Listen for messages from content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "keywordFound") {
        // Update the value in extension storage
        chrome.storage.sync.set({ keywordFound: true });
    }
});
