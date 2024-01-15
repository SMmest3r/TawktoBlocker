const rules = [{
    "id": 1,
    "priority": 1,
    "action": {
        "type": "block"
    },
    "condition": {
        "urlFilter": "||tawk.to",
        "resourceTypes": ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"],
        "domains": ["*"]
    }
}];

chrome.declarativeNetRequest.updateDynamicRules({
    addRules: rules
});