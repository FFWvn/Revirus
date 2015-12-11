(function($) {
  $(document).ready(function(e) {
	  $( ".rememberForgot").click(function(){
    	alert('feb');
    	$(this).find('label').attr("class","checked");
		});
  });
} )( jQuery );