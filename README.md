![Bugfish](https://img.shields.io/badge/Bugfish-jQuery-orange)
![Status](https://img.shields.io/badge/Status-Finished-green)
![License](https://img.shields.io/badge/License-MIT-black)
![Version](https://img.shields.io/badge/Version-1.0-white)
# Bugfish Sortselect (jquery selectbox plugin)
The "multiselect-sortable" jQuery plugin enhances the functionality of multiple select elements by allowing you to easily sort and manage selected options in a dual list box. This revised version of the plugin now includes a "rid" (Resource Identifier) parameter, which helps in distinguishing between different instances of the script when used on the same webpage. Failure to provide a unique "rid" value for each instance can result in errors or unexpected behavior.

Load the necessary jQuery libraries:

	<script src="/path/to/cdn/jquery.min.js"></script>
	<script src="/path/to/cdn/jquery-ui.min.js"></script>

Load the multiselect-sortable plugin's JavaScript and CSS files:

	<script src="assets/js/jquery.multiselect.sortable.js"></script>
	<link rel="stylesheet" href="assets/css/jquery.multiselect.sortable.js.css" />

Add the "multiselectsortable" class to your multiple select element and define pre-selected options using the "selected" attribute. Ensure you provide a unique "rid" value for each instance:
	
	<select name="multiselectsortable" class="multiselectsortable demo multiselectsortable-1" multiple data-rid="instance-1">
	</select>
	 
	<select name="multiselectsortable" class="multiselectsortable demo multiselectsortable-2" multiple data-rid="instance-2">
	</select>

	<select name="multiselectsortable" class="multiselectsortable demo multiselectsortable-3" multiple data-rid="instance-3">
	</select>

Call the function on the select element to activate the plugin, ensuring you pass the "rid" parameter for each instance:

	 jQuery(function($){
	   // Example 1
	   $('.multiselectsortable-1').bugfish_sortselect({
	    rid: 'instance-1'
	   });
	 });
	
	
	 jQuery(function($){
	   // Example 2
	   $('.multiselectsortable-2').bugfish_sortselect({
	    rid: 'instance-2'
	   });
	 });
	
	
	jQuery(function($){
	  // Example 3
	  $('.multiselectsortable-3').bugfish_sortselect({
	   rid: 'instance-3'
	 });
	});




## Documentations

You can find the documentation at www.bugfish.eu, besides  that there is a documentation inside  
 the docs folder of this repository and at https://bugfishtm.github.io/bugfish-jquery-sortselect !  

You can find the Documentation here:  
https://bugfishtm.github.io/bugfish-jquery-sortselect/

You can find the Github Page here:  
https://github.com/bugfishtm/bugfish-jquery-sortselect


## Folder Description

|Folder|Description|
|-|-|
|_release|Release Packages|
|_source| The plugins source code + example file!|
|docs|Files for the Github Repositories Pages and Documentations, view the Documentation by viewing the index.html file in your browser!|

For more informations see inside repository folders!

## Issues
If you encounter issues or have questions using this software, do not hesitate write us at our Forum on www.bugfish.eu/forum !

## License
For License Informations see License.md inside directories!