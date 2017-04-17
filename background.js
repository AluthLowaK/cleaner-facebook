var master = chrome.contextMenus.create({
    "id": "SynoStart",
    "title": '%s',
    "contexts":["selection"],
    "onclick": function(onClickData, tab){
        console.log(onClickData.selectionText);
        selection = document.getSelection();

        var options = { active: true,  currentWindow: true};
        chrome.tabs.query(options, sendMessage);

    }
});

function sendMessage(tabs) {
    var id = tabs[0].id;
    chrome.tabs.sendMessage(id, {ele: selection}, null);
}