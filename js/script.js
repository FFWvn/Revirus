(function($) {
  $(document).ready(function(e) {
    $('.rememberForgot label').click(function() {
      $(this).toggleClass('checked');
      alert('ok');
    });
  });
} )( jQuery );