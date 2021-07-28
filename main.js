chrome.tabs.onUpdated.addListener((id, info, tab) => {
    if (tab.url.startsWith("https://web.whatsapp.com")) {
        chrome.tabs.executeScript(id, { file: "./script.js" });
    }
});
