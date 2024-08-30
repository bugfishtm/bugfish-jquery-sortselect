# jQuery Sortselect

## Introduction

The **"multiselect-sortable"** jQuery plugin enhances multiple select elements by allowing easy sorting and management of selected options within a dual list box. This updated version includes a **"rid" (Resource Identifier)** parameter to distinguish between different instances of the script on the same webpage. Failing to provide a unique "rid" value for each instance can cause errors or unexpected behavior.

## Additional Libraries

This repository includes both jQuery and jQuery-UI to demonstrate the plugin's functionality. These libraries are provided to streamline the integration process, ensuring developers have the necessary resources readily available. By including these files, we aim to make it easier for developers to get up and running with the plugin quickly.

```html
<script src="./jquery-ui.min.js"></script>
<script src="./jquery.multiselect.sortable.js"></script>
<link rel="stylesheet" href="./jquery.multiselect.sortable.js.css">
```

## Implementation Steps

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
