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
$projectIntro = get_field('project_intro');
$theme_config = get_field('set_site', 'options');
?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) :
				the_post();?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="single-project-hero" style="background-image: url(<?php if ($HeroImage): echo $HeroImage; endif; ?>);">
						<div class="container">
							<div class="headline">
								<h1 class="entry-title"><?php the_title(); ?></h1>
								<?php
								$location_term = get_the_terms( get_the_ID(), 'location_category' );
								if ( $location_term && ! is_wp_error( $location_term ) ) :
									$location_taxonomy = $location_term[0]->name; ?>
									<p class="project-location"><?php echo $location_taxonomy; ?></p>
								<?php endif; ?>
							</div>
						</div>
						<div class="project-info">
							<div class="container">
								<?php if( have_rows('project_metrics') ):
									while ( have_rows('project_metrics') ) : the_row();
										$info_title = get_sub_field('project_metric_label');
										$info_content = get_sub_field('project_metric'); ?>
										<div class="project-info-metric">
											<h5><?php echo $info_title; ?></h5>
											<p class="project-client"><?php echo $info_content; ?></p>
										</div>
									<?php endwhile;
								endif; ?>
							</div>
						</div>
						<div class="hero-overlay"></div>
					</div><!-- .single-project-hero -->
					<nav class="breadcrumbs container" aria-label="Breadcrumb navigation">
					    <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
					        <?php if(function_exists('bcn_display'))
					        {
					            bcn_display();
					        }?>
					    </div>
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


									if ( $theme_config === 'kienlen') {
										$link = get_sub_field('service_link');?>
										<a href="<?php echo $link['url']; ?>"> <?php the_sub_field('service_name'); ?></a>
									<?php } else { ?>

									 		<li><?php the_sub_field('service_name'); ?></li>
								
									<?php	}
									endwhile; ?>
									</div>
								<?php endif; ?>
						</div><!-- .single-project-content -->
					</div>
				</article><!-- #post-<?php the_ID(); ?> -->
			<?php endwhile;
		else :
			get_template_part( 'template-parts/content', 'none' );
		endif; ?>

		<?php if ( $theme_config === 'kienlen') {
				get_template_part( 'template-parts/kienlen-footer-callout' );
		} else {
				get_template_part( 'template-parts/footer-callout' );
		}?>


	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
