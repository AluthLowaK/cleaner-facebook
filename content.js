var options = {ticker: true, page: true};
var elms = {ticker: "pagelet_canvas_nav_content"};
var selection;

var save = {ticker: null, page: null};
var parents = {ticker: null, page: null};



chrome.runtime.sendMessage({from: 'content', subject: 'showPageAction' });
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    console.log(msg);
    if (msg["elm"] === undefined) {
        options = msg;
        cleanup();
        return response(options);
    } else {
        console.log(msg);
    }
});

var cleanup = function () {
    console.log(options);
    var ticker = document.getElementById(elms.ticker);
    parents.ticker = ticker.parentNode;
    save.ticker = ticker.cloneNode();
    
    if (options.ticker && ticker) ticker.parentNode.removeChild(ticker);
    else if (!options.ticker && save.ticker && parents.ticker) parents.ticker.appendChild(save.ticker);

    var page = jQuery("div[data-testid='chat_sidebar']").find("div").first()[0];
    if (options.page && page) page.parentNode.removeChild(page);
};


cleanup();