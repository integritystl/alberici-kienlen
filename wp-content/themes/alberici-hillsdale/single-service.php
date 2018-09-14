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
			<div class="container">
			<?php
			if ( have_posts() ) :
				/* Start the Loop */
				while ( have_posts() ) : 
					the_post();?>
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="hero-area" style="background-image: url(<?php if ($HeroImage): echo $HeroImage; endif; ?>);">
						<?php
						if ( is_singular() && 'post' === get_post_type() ) :
							the_title( '<h1 class="entry-title">', '</h1>' ); ?>
						<?php 
						else :
							the_title( '<h2 class="entry-title" ><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
						<?php endif; ?>
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
					<?php alberici_hillsdale_post_thumbnail(); ?>
				
					<div class="entry-content">
						<?php
						if ( is_single() ) :
							the_content( sprintf(
								/* translators: %s: Name of current post. */
								wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', '_s' ), array( 'span' => array( 'class' => array() ) ) ),
								the_title( '<span class="screen-reader-text">"', '"</span>', false )
							) );
						else:
							the_excerpt();
						endif;
				
				
							wp_link_pages( array(
								'before' => '<div class="page-links">' . esc_html__( 'Pages:', '_s' ),
								'after'  => '</div>',
							) );
						?>
					</div><!-- .entry-content -->
				</article><!-- #post-<?php the_ID(); ?> -->
				

				<?php endwhile;

				the_posts_navigation();

			else :

				get_template_part( 'template-parts/content', 'none' );

			endif;
			?>
		
			<div class="services services-latest-3">
				<p class="headline-lines"><span>Related Projects</span></p>
				<?php

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
				//Default: Show Latest 3 Posts
				if(empty($latest_args)) {
					$latest_args = array(
					'post_type' =>  'service',
					'posts_per_page' => 3,
					);
				}

				$latest_query = new WP_Query( $latest_args );
				if ( $latest_query->have_posts() ) :
				?>
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
					<a href="<?php the_permalink(); ?>">
						<span class="post-title"><?php the_title(); ?></span>
					</a>
				</li>
				<?php endwhile; ?>
				</ul>
				<?php endif; wp_reset_postdata(); ?>
				<a href="<?php echo get_home_url(); ?>/service"> VIEW SERVICES </a>
			</div>
			 <?php get_template_part( 'template-parts/footer-callout' ); ?>
			<div><!-- container -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
