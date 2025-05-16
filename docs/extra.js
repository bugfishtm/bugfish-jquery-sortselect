/* All External URLs should be opened in a new tab! */
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="http"]');
  links.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
  });
});


/* Specific JS */
jQuery(function($){
	$('.multiselectsortable_1').bugfish_sortselect({
		selectable:{
			title:'Disabled'
		},
		selection :{
			title:'Selected'
		},
		rid: 31
	});
	
	$('.submit_btn').on('click',function(){
		var a = $('.bugfish_1').val()
		console.log(a)
		return false;
	})
	
})