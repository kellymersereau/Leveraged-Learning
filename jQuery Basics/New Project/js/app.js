// Problem: looks gross in smaller browser widths and therefore devices
// Solution: To hide the text links and swap them out with a more appropriate nav menu on smaller devices

// 1. Create a select and append to menu
// 2. Cycle over each list item / menu links 
	// 2A. option's value is the href
	// 2B. option's text is the text of link
	// 2C. append option to select
// 3. Create a button 
// 4. Bind click to button
	// 4A. go to select's location
// 5. Modify CSS to hide links on small resolution and show button and select
// 6. Modify CSS so it hides select and button on larger views
// 7. Deal with selected options depending on current page