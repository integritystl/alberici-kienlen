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
$theme_config = get_field('set_site', 'options');
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

		<?php
		global $post;
		$page_slug = $post->post_name;
		$my_query_args = array(
				'post_type' => 'project',
		    'posts_per_page' => 3, // change this to any number or '0' for all
		    'tax_query' => array(
		        array(
		            'taxonomy' => 'market_category',
		            'field' => 'slug',
		            'terms' => $page_slug // this gets the page slug
		        )
		    )
		);
		// a new instance of the WP_query class
		$latest_query = new WP_Query( $my_query_args ); ?>

		<?php if ( $latest_query->have_posts() ) : ?>
			<div class="container">
				<div class="markets markets-latest-3">
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
									<span class="card-overlay"></span>
									<?php echo wp_get_attachment_image( get_post_thumbnail_id(get_the_ID()), 'blog_image', false );?>
									<span class="projects-text">
										<?php
										$market_terms = get_the_terms( get_the_ID(), 'market_category' );
										$service_terms = get_the_terms( get_the_ID(), 'service_category' );

										if ($market_terms) :
											echo '<div class="markets">';
											foreach ( $market_terms as $market_term ) {
													echo '<span class="market-name">' . $market_term->name . '</span>';
											}
											echo '</div>';
										endif;

										if ($service_terms) :
											echo '<div class="services">';
											foreach ( $service_terms as $service_term ) {
													echo '<span class="service-name">' . $service_term->name . '</span>';
											}
											echo '</div>';
										endif;
										 ?>
										<h3><?php  the_title();?></h3>
									</span>
								</a>
							</li>
						<?php endwhile; ?>
					</ul>
					<a href="<?php echo get_home_url(); ?>/projects" class="btn"> VIEW PROJECTS </a>
				</div>
			</div>
		<?php endif; wp_reset_postdata(); ?>

        <?php if ( $theme_config === 'kienlen') {
            get_template_part( 'template-parts/kienlen-footer-callout' );
        } else {
            get_template_part( 'template-parts/footer-callout' );
        }?>
	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
