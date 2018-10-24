<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package alberici-hillsdale
 */

get_header();
$HeroImage = get_field('homepage_hero_featured_image');
$HeroHeadline = get_field('homepage_hero_title');
$HeroContent = get_field('homepage_hero_content');
$HeroButtonText = get_field('homepage_hero_button_text');
$HeroButtonLink = get_field('homepage_hero_button_link');
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php if ($HeroHeadline): ?>
				<div class="homepage-hero hero-image" style="background-image: url(<?php if ($HeroImage): echo $HeroImage; endif; ?>);">
					<div class="container">
						<h1><?php echo $HeroHeadline; ?></h1>
					</div>
						<div class="hero-content">
							<div class="container">
								<p><?php echo $HeroContent; ?></p>
								<?php if ($HeroButtonText): ?>
									<a href="<?php echo $HeroButtonLink; ?>" class="btn-lined-white"><?php echo $HeroButtonText; ?> </a>
								<?php endif; ?>
							</div>
						</div>

				</div>
			<?php endif; ?>

		<?php
			if(have_rows('flexible_content', get_the_ID())):
				while(have_rows('flexible_content')): the_row();
					include(locate_template('template-parts/flex-content/content-' . get_row_layout() . '.php'));
				endwhile;
			endif;
		?>


			<!-- News Section for Kienlen -->
			<?php $the_query = new WP_Query( 'posts_per_page=3' ); ?>
			<?php if ( $the_query -> have_posts() ): ?>
			<div class="news container">
				<h2>News</h2>
				<ul class="blog-content_posts">
				<?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
					<li>
						<a href="<?php the_permalink(); ?>" >
							<span class="news-meta">
								<?php echo wp_get_attachment_image( get_post_thumbnail_id(get_the_ID()), 'blog_image', false );?>
								<span class="news-text">
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
							</span>
						</a>
					</li>

				<?php
				 endwhile;
				 wp_reset_postdata(); ?>
				</ul>
				<a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>" class="btn">View More News</a>
			</div>
			<?php endif; ?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
