//Header javascript lives here
jQuery(function($) {
    $(document).ready(function() {

          $(window).bind('scroll', function () {
              if ($(window).width() <= 850){
              if ($(window).scrollTop() > 0) {
                $('#stickyHeader').addClass('fixed');
                $('.site-content').addClass('fixed-margin');

              } else {
                $('#stickyHeader').removeClass('fixed');
                $('.site-content').removeClass('fixed-margin');
              }
              } else {
                  if ($(window).scrollTop() > 50) {
                          $('#stickyHeader').addClass('fixed');
                          $('.site-content').addClass('fixed-margin');
                  } else {
                          $('#stickyHeader').removeClass('fixed');
                          $('.site-content').removeClass('fixed-margin');
                  }
              }
          });

      });
  });
