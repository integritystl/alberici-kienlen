<?php
/**
 * Template Name: Careers
 *
 * This template displays Careers Page
 *
 * @package alberici-hillsdale
 */
get_header();

$jobsCalloutHeader = get_field('jobs_callout_header');
$jobsCalloutContent = get_field('jobs_callout_content');
$jobsCalloutLink = get_field('jobs_callout_post_link');
$jobsCalloutgform = get_field('jobs_callout_careers_form');
?>
<div id="primary" class="content-area">
	<main id="main" class="site-main">

    <?php get_template_part( 'template-parts/hero' );?>
	

		<?php if ( get_the_content() ) { ?>
            <div class="entry-content container">
                <?php
                the_content();
                ?>
            </div><!-- .entry-content -->
        <?php } ?>

        <?php
			if(have_rows('flexible_content', get_the_ID())):
				while(have_rows('flexible_content')): the_row();
					include(locate_template('template-parts/flex-content/content-' . get_row_layout() . '.php'));
				endwhile;
			endif;
        ?>
        
        <div class="job-callout container">
            <h3><?php echo $jobsCalloutHeader; ?></h3>
            <p><?php echo $jobsCalloutContent; ?></p>
            <?php if ($jobsCalloutLink): ?>
                <a href="<?php echo $jobsCalloutLink; ?>">VIEW JOB POSTS</a>
            <?php endif;?>
            <?php echo $jobsCalloutgform; ?>
        </div>
        <?php get_template_part( 'template-parts/footer-callout' );?>

        
	</main><!-- #main -->
</div><!-- #primary -->
    
<?php

get_footer();
