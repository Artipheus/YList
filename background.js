let allLinks = ""
function getLinks()
{
    chrome.tabs.executeScript({file: "functions.js"});
}
function check()
{
    if(document.title === "YList")
    {
        linksInPopup();
    }
}
function linksInPopup()
{
    document.getElementById("tDiv").textContent = "";
    document.getElementById("tDiv").textContent = allLinks;
}
function copyLinks()
{
    navigator.clipboard.writeText(allLinks).then(function() {
        document.getElementById("copybtn").innerText = "Copied";
    }, function() {
        document.getElementById("copybtn").innerText = "Failed";
    }).then(setTimeout(() => {document.getElementById("copybtn").innerText = "Copy";}, 1500));
}
window.addEventListener("load", () => {
    if(document.title === "YList")
    {
        document.getElementById("refresh").addEventListener("click", () => {getLinks()});
        document.getElementById("copybtn").addEventListener("click", () => {copyLinks()});
        getLinks();
    }
})
chrome.runtime.onMessage.addListener(function(content, sender, sendResponse) {
    allLinks = content.links;
    if(allLinks != "")
    {
        sendResponse({status: "Success"});
        check();
    } else
    {
        sendResponse({status: "Error"});
    }
});