chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: "https://smmest3r.dev"
    });
});