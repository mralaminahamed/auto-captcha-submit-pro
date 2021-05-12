
browser.menus.create({
    id: "log-selection",
    title: "Log '%s' to the console",
    contexts: ["selection"]
});

browser.menus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "log-selection") {
        console.log(info.selectionText);
    }
});