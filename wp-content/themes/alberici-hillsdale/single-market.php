<?php
/**
 * The template for displaying single market
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package alberici-hillsdale
 */

get_header();
$HeroImage = get_field('general_hero_featured_image');
?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) :
				the_post();?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<?php get_template_part( 'template-parts/hero' );?>

					<div class="market-detail">
						<?php alberici_hillsdale_post_thumbnail(); ?>

						<div class="market-content">
							<?php the_content(); ?>
						</div><!-- .market-content -->
					</div>
				</article><!-- #post--->


			<?php endwhile;
		else :
			get_template_part( 'template-parts/content', 'none' );
		endif; ?>

		<?php if ( is_single() && 'market' === get_post_type()) :
			$terms = get_the_terms( get_the_ID(), 'category' );
			$term_list = wp_list_pluck( $terms, 'slug' );
			$latest_args = array(
				'post_type' => 'market',
				'posts_per_page' => 3,
				'post_status' => 'publish',
				'post__not_in' => array( get_the_ID() ),
				'orderby' => 'rand',
				'tax_query' => array(
					array(
						'taxonomy' => 'category',
						'field' => 'slug',
						'terms' => $term_list
					)
				)
			);
			$latest_query = new WP_Query( $latest_args );

		endif;

		//Default: Show Latest 3 Posts
		if(!$latest_query->have_posts()) :
			$latest_args = array(
			'post_type' =>  'project',
			'posts_per_page' => 3,
			'post_status' => 'publish'
			);
			$latest_query = new WP_Query( $latest_args );

		endif;

		if ( $latest_query->have_posts() ) : ?>

		<?php endif; wp_reset_postdata(); ?>




		<?php get_template_part( 'template-parts/footer-callout' ); ?>
	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
