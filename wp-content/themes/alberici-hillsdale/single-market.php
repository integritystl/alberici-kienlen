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
					<div class="hero-area" style="background-image: url(<?php if ($HeroImage): echo $HeroImage; endif; ?>);">
						<h1 class="entry-title"><?php the_title(); ?></h1>
					</div><!-- .hero-area -->
							<nav class="container breadcrumbs" aria-label="Breadcrumb navigation">
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
					<!-- </div> -->
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
			<div class="container">
				<div class="markets markets-latest-3">
					<span class="headline-lines"></span>
					<h2>Related Projects</h2>
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
								<p><?php $category = get_the_category(); echo $category[0]->cat_name; ?></p>
								<a href="<?php the_permalink(); ?>">
									<img src="<?php echo get_the_post_thumbnail_url(); ?>" class="project-img"/>
									<span class="post-title"><?php the_title(); ?></span>
								</a>
							</li>
						<?php endwhile; ?>
					</ul>
					<a href="<?php echo get_home_url(); ?>/projects" class="btn"> VIEW PROJECTS </a>
				</div>
				<?php endif; wp_reset_postdata(); ?>
			</div>
			<?php get_template_part( 'template-parts/footer-callout' ); ?>
		<div><!-- container -->
	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
