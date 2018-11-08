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
            <div class="card-group blog-content_posts">
            <?php foreach ( $servicePosts as $post ) :
                setup_postdata( $post ); ?>
                <?php if (get_the_post_thumbnail()): ?>
                    <article class="card-post card-news post">
                        <div class="card-overlay"></div>
                        <?php echo wp_get_attachment_image( get_post_thumbnail_id($post->ID), 'full', false );?>
                        <a href="<?php the_permalink(); ?>">
                            <div class="news-meta">
                                <h3><?php the_title(); ?></h3>
                            </div>
                        </a>
                    </article>
                <?php endif; ?>
            <?php
            endforeach; ?>

            <?php wp_reset_postdata(); ?>
            </div>
        </div> 
        <?php }
        get_template_part( 'template-parts/footer-callout' );?>

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
