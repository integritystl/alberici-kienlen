<?php
/**
 * Template Name: Services
 *
 * This template displays Service List Page for Kienlen
 *
 * @package alberici-hillsdale
 */
get_header();
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">

        <?php get_template_part( 'template-parts/hero' );?>
        <?php if ( get_the_content() ) { ?>
            <div class="serivces-content container">
                <?php
                the_content();
                ?>
            </div><!-- .serivces-content -->
        <?php } ?>

        <?php
        $servicePosts = get_posts( array(
            'post_type' => 'service',
            'posts_per_page' => 6
        ) );
        
        if ( $servicePosts ) { ?>
        <div class="services-list container">
            <?php foreach ( $servicePosts as $post ) :
                setup_postdata( $post ); ?>
                <?php if (get_the_post_thumbnail()): ?>
                    <a class="services" href="<?php the_permalink(); ?>">
                        <span class="img-overlay"></span>
                        <?php echo wp_get_attachment_image( get_post_thumbnail_id($post->ID), 'full', false );?>
                        <span class="post-title"><?php the_title(); ?></span>
                    </a>
                <?php endif; ?>
            <?php
            endforeach; ?>

            <?php wp_reset_postdata(); ?>
            </div> 
        <?php }
        get_template_part( 'template-parts/footer-callout' );?>

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
