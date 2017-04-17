/**
 * Created by nayana on 4/17/17.
 */
var selection = document.getSelection();

// extract the information you need
// if needed, return it to the main script with messaging


var options = { active: true,  currentWindow: true};
chrome.tabs.query(options, sendMessage);


function sendMessage(tabs) {
    var id = tabs[0].id;
    chrome.tabs.sendMessage(id, {ele: selection}, null);
}