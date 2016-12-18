// Problem: when clicking on image, goes to a dead end
// Solution: create an overlay with the large image - this is called a lightbox

var $overlay = $("<div id='overlay'></div>");
var $innerOverlay = $("<div id='inner'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($innerOverlay);
$innerOverlay.append($image);
$innerOverlay.append($caption);

$("body").append($overlay);

$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imgLocation = $(this).attr("href");
	$image.attr("src", imgLocation);

	$overlay.show();

	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

// when overlay is clicked:
$overlay.click(function(){
	$(this).hide();
});
	// hide the overlay 