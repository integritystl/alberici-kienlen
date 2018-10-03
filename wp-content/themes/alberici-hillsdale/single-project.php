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
			<div class="container">
			<?php
			if ( have_posts() ) :
				while ( have_posts() ) : 
					the_post();?>
					<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<div class="hero-area" style="background-image: url(<?php if ($HeroImage): echo $HeroImage; endif; ?>);">
                        <h2 class="entry-title"><?php the_title(); ?></h2>
                        <p class="project-location"></p> <!--leave it until the location taxonomy is ready-->
                        
                        <a href="">TRANSPORTATION</a> <!--fillup the url later， need to find where it links to. -->
                        <div class="project-info">
                            <p class="project-client"><?php echo $client; ?></p>
                            <p class="project-owner"><?php echo $owner; ?></p>
                            <p class="project-size"><?php echo $project_size; ?></p>
                        </div>
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

                    <div class="entry-content">
						<?php the_content(); ?>
                    </div><!-- .entry-content -->
                    
                    <?php alberici_hillsdale_post_thumbnail(); ?>
                    <h5>Services</h5>
                    <?php 
                    
                    if( have_rows('project_services') ):
                       while ( have_rows('project_services') ) : the_row(); 
                            $link = get_sub_field('service_link');?>
                           <a href="<?php echo $link['url']; ?>"> <?php the_sub_field('service_name'); ?></a>
                       <?php endwhile;                   
                   endif;
                    ?>
				</article><!-- #post-<?php the_ID(); ?> -->
				

				<?php endwhile;
			else :
				get_template_part( 'template-parts/content', 'none' );
			endif;
			?>
		
			
			 <?php get_template_part( 'template-parts/footer-callout' ); ?>
			<div><!-- container -->
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();