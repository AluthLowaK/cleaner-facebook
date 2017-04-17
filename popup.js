
var ticker, page, save;
var data = {ticker: false, page: false};
var names = {ticker: "ticker", page: "page"};

var clickHandler = function (e) {
    ticker = document.getElementById("ticker").checked
    page = document.getElementById("page").checked;
    data = {ticker: ticker, page: page};
    console.log(data);
    chrome.storage.sync.set(data, function () {
        var options = { active: true,  currentWindow: true};
        chrome.tabs.query(options, sendMessage);
    });
};

function onLoad() {

    ticker = document.getElementById("ticker").checked
    page = document.getElementById("page").checked;
    save = document.getElementById("save");

    save.onclick = clickHandler;

    chrome.storage.sync.get(null, function (e) {
        document.getElementById(names.ticker).setAttribute("checked", e.ticker);
        document.getElementById(names.page).setAttribute("checked", e.page);
        data.ticker = e.ticker;
        data.page.e.page;
    });

}


window.addEventListener("DOMContentLoaded", function () {
    onLoad();
});

function sendMessage(tabs) {
    var id = tabs[0].id;
    chrome.tabs.sendMessage(id, data, null);
}