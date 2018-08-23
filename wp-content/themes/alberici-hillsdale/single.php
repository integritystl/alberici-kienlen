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
	<div class="container">
		<div id="primary" class="content-area">
			<p class="breadcrumb"><a class="arrow-link left-arrow" href="<?php echo get_permalink('259'); ?>">Back to News</a></p>
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
			<?php include(locate_template('template-parts/share-menu.php')); ?>
			<div class="news news-latest-3">
				<div class="container">
					<p class="headline-lines"><span>Related Articles</span></p>
					<?php get_template_part( 'template-parts/widget', 'latest-posts' ); ?>
					<!-- <a href="<?php //echo get_permalink('259'); ?>" class="button all-news">View All News</a> -->
				</div>
			</div>
		</aside>
	</div>
</main><!-- #main -->

<?php

get_footer();
