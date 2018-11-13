<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package alberici-hillsdale
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php get_template_part( 'template-parts/hero' );?>
			<div class="container">
				<?php
				while ( have_posts() ) :
					the_post();

					get_template_part( 'template-parts/content', 'page' );



				endwhile; // End of the loop.		
				?>
			</div>

			<?php
			if(have_rows('flexible_content', get_the_ID())):
				while(have_rows('flexible_content')): the_row();
					include(locate_template('template-parts/flex-content/content-' . get_row_layout() . '.php'));
				endwhile;
			endif;
			?>

			<?php if( have_rows('our_clients') ): ?>
			<div class="our-clients container">
				<h2>Our Clients Include</h2>
				<div class="clients-img">
				<?php while ( have_rows('our_clients') ) : the_row(); ?>
					<?php echo wp_get_attachment_image(get_sub_field('our_clients_image'), 'medium'); ?>
				<?php endwhile; ?>
				</div>
			</div>
			 <?php endif; ?>
			
			<?php get_template_part( 'template-parts/footer-callout' ); ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
