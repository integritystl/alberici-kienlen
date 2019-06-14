<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package alberici-hillsdale
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer clear">
		<div class="site-info">
				<div class="container">
				<div class="site-copyright">
					<p class="copyright">
						<span>
							Copyright <?php echo date('Y'); ?> <?php the_field('footer_copyright_message', 'option'); ?>
						</span>
						<a href="tel:+1 <?php the_field('footer_phone_number','option');?>"><?php the_field('footer_phone_number','option')?></a></p>
				</div>

				<div class="site-footer-menus">
					<nav class="footer-navigation menu" role="navigation">
						<?php wp_nav_menu( array( 'theme_location' => 'footer-menu', 'menu_id' => 'footer-menu', 'container' => ''  ) ); ?>
					</nav>
				</div>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
