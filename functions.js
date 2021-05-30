if(typeof linksAndTitles == 'undefined')
{
	var linksAndTitles = "";
} else
{
	linksAndTitles = "";
}
for(let i = 0; i < document.getElementsByClassName("style-scope ytd-playlist-video-list-renderer")[3].children.length; i = i + 1)
{
	let current = document.getElementsByClassName("style-scope ytd-playlist-video-list-renderer")[3].children[i];
	let title = current.children[1].children[0].children[1].children[0].innerText;
	let destination = current.children[1].children[0].children[1].children[0].children[1].href;
	let combined = destination + " - " + title;
	linksAndTitles += combined + "\n";
}
chrome.runtime.sendMessage({links: linksAndTitles}, function(response) {
	// console.log(response.status);
});