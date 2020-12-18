if(typeof linksAndTitles == 'undefined')
{
	var linksAndTitles = "";
} else
{
	linksAndTitles = "";
}
for(let i = 0; i < document.getElementsByClassName("yt-simple-endpoint style-scope ytd-playlist-video-renderer").length; i = i + 1)
{
	let current = document.getElementsByClassName("yt-simple-endpoint style-scope ytd-playlist-video-renderer")[i];
	let title = current.children[1].children[0].children[1].innerText;
	let combined = current.href + " - " + title;
	linksAndTitles += combined + "\n";
}
chrome.runtime.sendMessage({links: linksAndTitles}, function(response) {
	// console.log(response.status);
});