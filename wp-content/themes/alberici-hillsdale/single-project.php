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
							<p class="project-location">Chicago, Illinois</p> <!--leave it until the location taxonomy is ready-->
							<div class="market-link">
							<a href="">Transportation</a> <!--fillup the url later， need to find where it links to. -->
							</div>
						</div>
						<div class="project-info">
							<div class="container">
							<p class="project-client"><?php echo $client; ?></p>
							<p class="project-owner"><?php echo $owner; ?></p>
							<p class="project-size"><?php echo $project_size; ?></p>
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

					<div class="single-project">
						<div class="single-project-content">
							<?php the_content(); ?>
							<div class="service-list">
								<h3>Services</h3>
								<?php
								if( have_rows('project_services') ):
									while ( have_rows('project_services') ) : the_row();
									$link = get_sub_field('service_link');?>
									<a href="<?php echo $link['url']; ?>"> <?php the_sub_field('service_name'); ?></a>
									<?php endwhile;
								endif; ?>
							</div>
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
