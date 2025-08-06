# Bugfish jQuery Sortselect

Enhance multi-select elements with sortable, dual-list functionality and unique instance handling.

-----------

## Introduction

The **"multiselect-sortable"** jQuery plugin enhances multiple select elements by allowing easy sorting and management of selected options within a dual list box. This updated version includes a **"rid" (Resource Identifier)** parameter to distinguish between different instances of the script on the same webpage. Failing to provide a unique "rid" value for each instance can cause errors or unexpected behavior.

### Additional Libraries

This repository includes both jQuery and jQuery-UI to demonstrate the plugin's functionality. These libraries are provided to streamline the integration process, ensuring developers have the necessary resources readily available. By including these files, we aim to make it easier for developers to get up and running with the plugin quickly.

```html
<script src="./jquery-ui.min.js"></script>
<script src="./jquery.multiselect.sortable.js"></script>
<link rel="stylesheet" href="./jquery.multiselect.sortable.js.css">
```

### Implementation Steps

1. **Load the necessary jQuery libraries:**

```html
<script src="/path/to/cdn/jquery.min.js"></script>
<script src="/path/to/cdn/jquery-ui.min.js"></script>
```

2. **Load the multiselect-sortable plugin's JavaScript and CSS files:**

```html
<script src="assets/js/jquery.multiselect.sortable.js"></script>
<link rel="stylesheet" href="assets/css/jquery.multiselect.sortable.js.css">
```

3. **Add the `multiselectsortable` class to your multiple select element and define pre-selected options using the `selected` attribute. Ensure you provide a unique `rid` value for each instance:**

```html
<!-- Example 1 -->
<select name="multiselectsortable" class="multiselectsortable demo multiselectsortable-1" multiple data-rid="instance-1">
  <!-- Options here... -->
</select>

<!-- Example 2 -->
<select name="multiselectsortable" class="multiselectsortable demo multiselectsortable-2" multiple data-rid="instance-2">
  <!-- Options here... -->
</select>

<!-- Example 3 -->
<select name="multiselectsortable" class="multiselectsortable demo multiselectsortable-3" multiple data-rid="instance-3">
  <!-- Options here... -->
</select>
```

4. **Call the function on the select element to activate the plugin, ensuring you pass the `rid` parameter for each instance:**

```javascript
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
```


<script>

.multiselect_sortable_content, .multiselect_sortable_content_selection, .select_li_31 disabled {
	color: black !important;
}

html {
	background: red !important;
	
	
}

.multiselectsortable_1 {
	color: black !important;
}
</script>

### Demo
Here you can see a demonstration of the bugfish sortselect jquery plugin! Check the Browsers Console after Submitting to see submitted values! 

<form action="" method="post">
<select name="multiselectsortable_1" class="multiselectsortable_1 bugfish_1" multiple>
<option value="7" selected data-deneme="deneme" disabled>Entry 7</option>
<option value="6" selected disabled>Entry 6</option>
<option value="5" disabled>Entry 5</option>
<option value="4" selected>Entry 4</option>
<option value="3" selected>Entry 3</option>
<option value="2" selected>Entry 2</option>
<option value="1" selected>Entry 1</option>
</select>
<input type="submit" class="submit_btn md-button" value="Submit Form"></form>
  
Check the browser console after submit!

-----------

## Downloads  
The [Downloads Section](./download.html) provides all the necessary files to get started with the project, including the latest software versions and any related resources.

-----------

## Contributing  
Find out how you can contribute to the project by visiting the [Contributing Page](./contributing.html). Whether you want to report bugs, suggest features, or submit improvements, we welcome your involvement.

-----------

## Warranty  
Review the terms of our warranty on the [Warranty Information Page](./warranty.html). This page outlines the scope of support and any applicable guarantees.

-----------

## Support  
If you need assistance, visit the [Support Page](./support.html) to find the available channels for getting help with any issues or questions you might have.

-----------

## License  
Get the full details on licensing by checking out the [License Information Page](./license.html). This section includes the terms and conditions under which the project is distributed.