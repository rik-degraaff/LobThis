// Add a listener to the browseraction, that calls Lobthis.js.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "LobThis.js"});
});

// Add a menuitem in the contextmenu when text is selected.
chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "Look for selected text in the Library of Babel";
    var id = chrome.contextMenus.create({
                                            "title": title,
                                            "contexts": [context],
                                            "id": "context" + context
                                        }
    );
});

// Add the same listener to this menuitem.
chrome.contextMenus.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "LobThis.js"});
});