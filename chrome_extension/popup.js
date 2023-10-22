document.addEventListener('DOMContentLoaded', function () {
    // Initialize the variable to false (or any initial value you prefer)
    let isKeywordFound = false;

    // Query the background script for the keywordFound status
    chrome.storage.sync.get(['keywordFound'], function (result) {
        isKeywordFound = result.keywordFound;

        // Update the UI based on the value
        if (isKeywordFound) {
            document.getElementById("sus-index").innerHTML++;
        }
    });
});
