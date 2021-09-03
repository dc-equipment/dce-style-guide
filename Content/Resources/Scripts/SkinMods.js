/* ModCap Skin Modifications example */
/* You can use these script examples in your skin. 
   a) Open the skin 'Toolbar' tab, and add these examples in the 'Custom javascript' secion.
   b) Load this js file. */

/* Example 1 - How to add a title to the header area */
/* This adds a title to the header area that will display the document title, which is set using the skin 'Caption' on the 'General' tab */

$(document).ready(function(){
	/* (1) This adds a title (div#header-title) to the header area after the logo (#header>a) for the normal desktop layout */
		
	$("#header>a").after('<div id="header-title"></div>');
	$("#header-title").text(document.title);
		
	/* (2) This next part adds a title (div#responsive-header-title) to the header area after the logo (#responsiveHeader>a) for the responsive layout. */
		
	$("#responsiveHeader>a").after('<div id="responsive-header-title"></div>');
	$("#responsive-header-title").text(document.title);
		
});
/* End Example 1 */


/* Example 2 - How to add a link to a skin stylesheet */
/* This adds a link to the skin.css file - Content/Resources/Styleheets/skin.css */
$('<link>')
	.appendTo($('head'))
	.attr({type: 'text/css', rel: 'stylesheet'})
	.attr('href', 'Content/Resources/Stylesheets/skin.css');

	/* link also included in lowercase, in target is set to use lowercase filenames */
$('<link>')
	.appendTo($('head'))
	.attr({type: 'text/css', rel: 'stylesheet'})
	.attr('href', 'content/resources/stylesheets/skin.css');
/* End Example 2 */


/* Example 3 - How to move the search box in responsive layout */
/* This will move the search box (#search-sidebar) in responsive layout from the menu and into the header area (#responsiveHeader) */

$(document).ready(function(){
		/* Use appendTo to move #search-sidebar to the #responsiveHeader */
		$('#search-sidebar').appendTo('#responsiveHeader');
});
/* End Example 3 */