/* MENU HAMBURGER */

$links = document.querySelectorAll(".menu a"); 


for (var i = $links.length - 1; i >= 0; i--) {
	$links[i].addEventListener("click", function(){
		$target = this.getAttribute("href");
		console.log($target);
		document.querySelector("#menu_opener_id").checked = false;
	})
}

/* PLAY VIDEO */

var item = document.querySelectorAll('.rollover');
var videos = document.querySelectorAll('.tile-video > video');

for (var i = 0; i < videos.length; i++) {
	videos[i].pause();
	videos.currentTime = 0;
}

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("mouseenter",function(e) {
    	
    	var video = this.parentNode.querySelector("video");
    	
		if (video.paused) {
    		video.play(); 
		}
	},false);

}

/* FULL SCREEN */
var button = document.querySelectorAll(".button");


for (var i = button.length - 1; i >= 0; i--) {
	button[i].addEventListener("click", function(e){
		e.preventDefault();

if (
	document.fullscreenEnabled || 
	document.webkitFullscreenEnabled || 
	document.mozFullScreenEnabled ||
	document.msFullscreenEnabled
) {
	var thisVideo = this.parentNode.querySelector("video");
		thisVideo.currentTime = 0;

		if (thisVideo.requestFullscreen) {
		  thisVideo.requestFullscreen();
		} else if (thisVideo.msRequestFullscreen) {
		  thisVideo.msRequestFullscreen();
		} else if (thisVideo.mozRequestFullScreen) {
		  thisVideo.mozRequestFullScreen();
		} else if (thisVideo.webkitRequestFullscreen) {
		  thisVideo.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
}
})
}

/* TIRAR LINK VIDEO */

var ahrefs = document.querySelectorAll(".tiled-work-item a");

for (var i = ahrefs.length - 1; i >= 0; i--) {
	ahrefs[i].addEventListener("click", function(e){
		e.preventDefault();
	})
}

/* STICKY HEADER */

window.onscroll=function(){changeMenu()}

function changeMenu()
{
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
	
	var el = document.querySelector(".initial");
    var rect = el.getBoundingClientRect();
		{
  			bottom: rect.bottom + document.body.scrollTop
  		};

  		var header = document.querySelector(".menu_bar");

    // At specifiv position do what you want 
    if(rect.bottom <= 0) {
    	header.classList.add("fixo");
    }
    else {
    	header.classList.remove("fixo");
    }
}