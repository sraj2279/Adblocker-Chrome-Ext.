var enabled = true;

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (!enabled)                                           // if the extension is not enabled
            return { cancel: false };
        else {
            return { cancel: true }
        }
    },
    { urls: blocked_sites },
    ["blocking"]
)



