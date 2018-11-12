<?php
/**
 * The template for displaying single service
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
						
						<div class="service-detail">
							<?php alberici_hillsdale_post_thumbnail(); ?>
							<div class="service-content">
								<?php the_content(); ?>
							</div>
						</div><!-- .service-detail -->
					</article><!-- #post-<?php the_ID(); ?> -->


				<?php endwhile;
			else :
				get_template_part( 'template-parts/content', 'none' );
			endif;

			if ( is_single() && 'service' === get_post_type()) {
				$terms = get_the_terms( get_the_ID(), 'category' );
				$term_list = wp_list_pluck( $terms, 'slug' );
				$latest_args = array(
					'post_type' => 'service',
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
			}
			$latest_query = new WP_Query( $latest_args );

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
				<div class="services services-latest-3 container">
				<h2>Related Projects</h2>
				<ul>
				<?php while( $latest_query->have_posts() ) : $latest_query->the_post();
					$categories = get_the_category();
					$category_names = '';

					if ( ! empty( $categories ) ) {
					foreach($categories as $category) {
						$category_names .= $category->name . ' ';
					}
					}
				?>
				<li>
					<p><?php $category = get_the_category(); echo $category[0]->cat_name; ?></p>
					<a href="<?php the_permalink(); ?>">
						<span class="card-overlay"></span>
						<?php echo wp_get_attachment_image( get_post_thumbnail_id(get_the_ID()), 'blog_image', false );?>
						<span class="projects-text">
							<?php
							$market_taxonomy = get_the_terms( get_the_ID(), 'market_category' );
							$service_taxonomy = get_the_terms( get_the_ID(), 'service_category' );
							if ($market_taxonomy) { ?>
								<p><?php echo $market_taxonomy[0]->name;?></p>
							<?php }
							if ($service_taxonomy) { ?>
								<p><?php echo $service_taxonomy[0]->name;?></p>
							<?php } ?>
							<h3><?php  the_title();?></h3>
						</span>
					</a>
				</li>
				<?php endwhile; ?>
				</ul>
				<?php endif; wp_reset_postdata(); ?>
				<a href="<?php echo get_home_url(); ?>/service" class="btn"> VIEW SERVICES </a>
			</div>
			<?php get_template_part( 'template-parts/footer-callout' ); ?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
