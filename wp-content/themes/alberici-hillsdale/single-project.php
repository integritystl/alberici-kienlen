<?php
/**
 * The template for displaying single project
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package alberici-hillsdale
 */

get_header();
$HeroImage = get_field('general_hero_featured_image');
$client = get_field('project_client');
$owner = get_field('project_owner');
$project_size = get_field('project_size');
$projectIntro = get_field('project_intro');
?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) :
				the_post();?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="single-project-hero" style="background-image: url(<?php if ($HeroImage): echo $HeroImage; endif; ?>);">
						<div class="headline">
							<h1 class="entry-title"><?php the_title(); ?></h1>
							<?php
							$location_term = get_the_terms( get_the_ID(), 'location_category' );
							if ( $location_term && ! is_wp_error( $location_term ) ) :
								$location_taxonomy = $location_term[0]->name; ?>
								<p class="project-location"><?php echo $location_taxonomy; ?></p>
							<?php endif; ?>

							<div class="market-link">
								<?php
								$market_term = get_the_terms( get_the_ID(), 'market_category' );
								if ( $market_term && ! is_wp_error( $market_term ) ) :
									$market_taxonomy = $market_term[0]->name; ?>
									<a href=""><?php echo $market_taxonomy; ?></a> <!-- check if need a link later -->
								<?php endif; ?>
							</div>
						</div>
						<div class="project-info">
							<div class="container">
							<?php if ($client) : ?>
								<div class="project-info-metric">
									<h5>Client</h5>
									<p class="project-client"><?php echo $client; ?></p>
								</div>
							<?php endif; ?>
							<?php if ($owner) : ?>
								<div class="project-info-metric">
									<h5>Owner</h5>
									<p class="project-owner"><?php echo $owner; ?></p>
								</div>
							<?php endif; ?>
							<?php if ($project_size) : ?>
								<div class="project-info-metric">
									<h5>Project Size</h5>
									<p class="project-size"><?php echo $project_size; ?></p>
								</div>
							<?php endif; ?>
							</div>
						</div>
					</div><!-- .single-project-hero -->
					<nav class="breadcrumbs container" aria-label="Breadcrumb navigation">
						<?php
						if ( function_exists('yoast_breadcrumb') ) {
							yoast_breadcrumb( '
							<p id="breadcrumbs">','</p>
							' );
						} ?>
					</nav>

					<?php if ($projectIntro) : ?>
						<div class="single-project-intro">
							<h2><?php echo $projectIntro; ?></h2>
						</div>
					<?php endif; ?>

					<div class="single-project-details">
						<div class="single-project-images">
							<?php if( have_rows('project_images') ): ?>
								<?php while ( have_rows('project_images') ) : the_row();
									$projectImage = get_sub_field('project_image');?>
									<?php echo wp_get_attachment_image($projectImage, 'tile_image'); ?>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>

						<div class="single-project-content">
							<?php the_content(); ?>
								<?php
								if( have_rows('project_services') ): ?>
									<div class="service-list">
									<h3>Services</h3>
									<?php while ( have_rows('project_services') ) : the_row();
										$link = get_sub_field('service_link');?>
										<a href="<?php echo $link['url']; ?>"> <?php the_sub_field('service_name'); ?></a>
									<?php endwhile; ?>
									</div>
								<?php endif; ?>
						</div><!-- .single-project-content -->
					</div>
				</article><!-- #post-<?php the_ID(); ?> -->
			<?php endwhile;
		else :
			get_template_part( 'template-parts/content', 'none' );
		endif; ?>

		<?php get_template_part( 'template-parts/footer-callout' ); ?>
	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
