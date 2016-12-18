// Problem: Prevent spoilerphobes from seeing spoilers
// Solution: Hide spoilers and reveal them through user interaction

// 1. Hide spoiler span
// when you're selecting elements in jquery, add a space between elements to look for the span within the elements with the class spoiler
$(".spoiler span").hide();
// 2. Add a button within .spoiler
$(".spoiler").append("<button>Reveal Spoiler!</button>")
// 3. When button is pressed
$("button").click(function(){
	// a. Show the spoiler
	$(this).prev().show();
	// b. Remove button
	$(this).remove();
})

