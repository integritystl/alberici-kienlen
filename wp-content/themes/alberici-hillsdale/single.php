<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package alberici-hillsdale
 */

get_header();
?>

<main id="main" class="site-main">
	<div class="news-detail container">
		<div id="primary" class="content-area news-content">
		<nav class="breadcrumbs container" aria-label="Breadcrumb navigation">
			<?php
			if ( function_exists('yoast_breadcrumb') ) {
				yoast_breadcrumb( '
				<p id="breadcrumbs">','</p>
				' );
			}
			?>
		</nav>

			<?php
			if ( have_posts() ) :
				/* Start the Loop */
				while ( have_posts() ) :
					the_post();

					/*
					* Include the Post-Type-specific template for the content.
					* If you want to override this in a child theme, then include a file
					* called content-___.php (where ___ is the Post Type name) and that will be used instead.
					*/
					get_template_part( 'template-parts/content', get_post_type() );

				endwhile;

				the_posts_navigation();

			else :

				get_template_part( 'template-parts/content', 'none' );

			endif;
			?>
		</div><!-- #primary -->

		<aside id="secondary" class="sidebar-area" role="complementary">
			<div class="news-latest-3">
				<?php if ( is_active_sidebar( 'right-sidebar' ) ) : ?>
					<ul id="sidebar">
						<?php dynamic_sidebar( 'right-sidebar' ); ?>
					</ul>
				<?php endif; ?>
			</div>

		</aside>
	</div>
</main><!-- #main -->

<?php

get_footer();
