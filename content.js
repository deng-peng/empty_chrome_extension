chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        var msg = message.msg;

        console.log(msg);

        response('aaa');
    }
);

function response(str) {
    chrome.runtime.sendMessage({
        type: 'response',
        msg: str
    });
}
