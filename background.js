const rules = [{
    id: 1,
    priority: 1,
    action: { type: "block" },
    condition: {
        urlFilter: "||tawk.to",
        resourceTypes: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    }
}];

if (typeof chrome !== 'undefined' && chrome.declarativeNetRequest && chrome.declarativeNetRequest.updateDynamicRules) {
    try {
        chrome.declarativeNetRequest.updateDynamicRules({ addRules: rules });
    } catch (e) {
        console.error('declarativeNetRequest.updateDynamicRules error', e);
    }
} else if (typeof chrome !== 'undefined' && chrome.webRequest && chrome.webRequest.onBeforeRequest) {
    try {
        chrome.webRequest.onBeforeRequest.addListener(
            function (details) { return { cancel: true }; },
            { urls: ["*://*.tawk.to/*", "*://tawk.to/*"] },
            ["blocking"]
        );
    } catch (e) {
        console.error('webRequest.onBeforeRequest setup error', e);
    }
}

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: "https://smmest3r.dev" });
});
