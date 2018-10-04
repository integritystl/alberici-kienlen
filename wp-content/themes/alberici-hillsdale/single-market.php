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
		<div class="container">
			<?php
			if ( have_posts() ) :
				while ( have_posts() ) : 
					the_post();?>
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="hero-area" style="background-image: url(<?php if ($HeroImage): echo $HeroImage; endif; ?>);">
						<h2 class="entry-title"><?php the_title(); ?></h2>
					</div><!-- .hero-area -->
					<nav class="breadcrumbs container" aria-label="Breadcrumb navigation">
						<?php
						if ( function_exists('yoast_breadcrumb') ) {
							yoast_breadcrumb( '
							<p id="breadcrumbs">','</p>
							' );
						}
						?>
					</nav>
					<div class="market-detail">
						<?php alberici_hillsdale_post_thumbnail(); ?>
					
						<div class="market-content">
							<?php the_content(); ?>
						</div><!-- .market-content -->
					</div>
				</article><!-- #post-<?php the_ID(); ?> -->
				

				<?php endwhile;
			else :
				get_template_part( 'template-parts/content', 'none' );
			endif;

			if ( is_single() && 'market' === get_post_type()) {
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

			}

			//Default: Show Latest 3 Posts
			if(!$latest_query->have_posts()) {
				$latest_args = array(
				'post_type' =>  'project',
				'posts_per_page' => 3,
				'post_status' => 'publish'
				);
				$latest_query = new WP_Query( $latest_args );

			} 
			
			if ( $latest_query->have_posts() ) : ?>
				<div class="markets markets-latest-3">
					<p class="headline-lines"><span>Related Projects</span></p>
					<ul>
						<?php while( $latest_query->have_posts() ) : $latest_query->the_post();
							$categories = get_the_category();
							$category_names = '';

							if ( ! empty( $categories ) ) {
								foreach($categories as $category) {
									$category_names .= $category->name . ' ';
								}
							} ?>
							<li>
								<a href="<?php the_permalink(); ?>">
									<span class="post-title"><?php the_title(); ?></span>
								</a>
							</li>
						<?php endwhile; ?>
					</ul>
				</div>
			<?php endif; wp_reset_postdata(); ?>
			<a href="<?php echo get_home_url(); ?>/projects"> VIEW PROJECTS </a>

			<?php get_template_part( 'template-parts/footer-callout' ); ?>
		<div><!-- container -->
	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
