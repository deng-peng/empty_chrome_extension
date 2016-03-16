chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, {msg: 'hello'});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == "response") {
        alert(request.msg);
    }
});