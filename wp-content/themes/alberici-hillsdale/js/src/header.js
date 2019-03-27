// Header javascript lives here
jQuery(($) => {
  $(document).ready(() => {
    $(window).bind('scroll', () => {
      if ($(window).width() <= 850) {
        if ($(window).scrollTop() > 0) {
          $('#stickyHeader, .sub-menu').addClass('fixed');
          $('.site-content').addClass('fixed-margin');
        } else {
          $('#stickyHeader, .sub-menu').removeClass('fixed');
          $('.site-content').removeClass('fixed-margin');
        }
      } else if ($(window).scrollTop() > 50) {
        $('#stickyHeader, .sub-menu').addClass('fixed');
        $('.site-content').addClass('fixed-margin');
      } else {
        $('#stickyHeader, .sub-menu').removeClass('fixed');
        $('.site-content').removeClass('fixed-margin');
      }
    });
  });
});
