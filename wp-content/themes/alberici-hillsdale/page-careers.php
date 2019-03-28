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
$theme_config = get_field('set_site', 'options');
?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">
        <div class="career-template">
            <?php get_template_part( 'template-parts/hero' );?>

            <?php if ( get_the_content() ) { ?>
                <div class="career-content container">
                    <?php
                    the_content();
                    ?>
                </div><!-- .career-content -->
            <?php } ?>

            <div class="job-callout container">
                <div class="callout-content">
                    <h2><?php echo $jobsCalloutHeader; ?></h2>
                    <p><?php echo $jobsCalloutContent; ?></p>
                    <?php if ($jobsCalloutLink): ?>
                        <a class="btn" href="<?php echo $jobsCalloutLink; ?>">View Job Posts</a>
                    <?php endif;?>
                </div>
                <?php echo $jobsCalloutgform; ?>
            </div>

            <?php
                if(have_rows('flexible_content', get_the_ID())):
                    while(have_rows('flexible_content')): the_row();
                        include(locate_template('template-parts/flex-content/content-' . get_row_layout() . '.php'));
                    endwhile;
                endif;
            ?>
            <?php if ( $theme_config === 'kienlen') { 
                get_template_part( 'template-parts/kienlen-footer-callout' );
            } else {
                get_template_part( 'template-parts/footer-callout' ); 
            }?>


        </div>


	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
