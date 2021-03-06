window.jQuery(document).ready(($) => {
  /**
     * Mobile Menu Stuff
     */

  // We are using sidr to handle our menu JS
  // https://www.berriart.com/sidr/
  const sidrName = 'sidr-main';

  $('#mobile-menu-toggle').sidr({
	  name: sidrName,
	  side: 'left',
	  source: '.main-navigation, .utility-bar_menu',
	  renaming: false,
	  onOpen() {
      $(window).on('click.sidr', (e) => {
		  $.sidr('close', sidrName);
      });
      $('#mobile-menu-toggle').addClass('menu-open');
      $('.site-content').prepend('<div class="mobile-menu-overlay"></div>');
      $('body').addClass('lock-scroll');
	  },
	  onClose() {
      $(window).off('click.sidr');
      $('#mobile-menu-toggle').removeClass('menu-open');
      $('.mobile-menu-overlay').remove();
      $('body').removeClass('lock-scroll');
	  },
  });

  // Don't you dare close me out!
  $(`#${sidrName}`).on('click.sidr', (e) => {
	  e.stopPropagation();
  });

  // Mega-menu functionality
  $('.sidr .menu-item-has-children')
    .find('> a')
    .on('click', function (e) {
      e.preventDefault();
      const parent = $(this).parent();
      const parentHTML = parent.children('a:first-child').html();
      const parentLink = parent.children('a:first-child').attr('href');
      if (parent.children('.sub-menu').find($('.parent-page')).length < 1) {
        parent
          .children('.sub-menu')
          .prepend(
            `<li class="menu-item parent-page"><a href="${
			 parentLink
			 }">${
			 parentHTML
			 }</a></li>`,
          );
      }
      if (parent.children('.sub-menu').length > 0) {
        parent.children('.sub-menu').slideToggle();
      }
      return false;
    });
});
