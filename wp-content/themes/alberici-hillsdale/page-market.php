<?php
/**
 * Template Name: Market & Service
 *
 * This template renders the Markets Post Types
 *
 * @package alberici-hillsdale
 */

get_header();
?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">

    <?php get_template_part( 'template-parts/hero' );?>


		<?php if ( get_the_content() ) { ?>
            <div class="market-content container">
                <?php the_content(); ?>
            </div><!-- .market-content -->
        <?php } ?>

        <?php if( have_rows('market_callouts') ): ?>
            <div class="market-callouts container">
            <?php while ( have_rows('market_callouts') ) : the_row();
                $market_callout_post = get_sub_field('market_callouts_market');
                $market_callout_image = get_sub_field('market_callouts_image');

                if ( $market_callout_post ) : ?>
                    <div class="market-item">
                        <?php
                        $size = 'thumbnail'; // (thumbnail, medium, large, full or custom size)
                        if( $market_callout_image ) {
                            echo wp_get_attachment_image( $market_callout_image, $size );
                        }
                        if( $market_callout_post ):
                            // override $post
                            $post = $market_callout_post;
                            setup_postdata( $post );
                            ?>
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
                        <?php endif;?>
                    </div>
                <?php endif;
            endwhile; ?>
            </div>
        <?php endif;?>
        
        <h2 class="headline-lines container"></h2>

        <h2 class="services-title container">Services</h2>
        <?php
			if(have_rows('flexible_content', get_the_ID())):
				while(have_rows('flexible_content')): the_row();
					include(locate_template('template-parts/flex-content/content-' . get_row_layout() . '.php'));
				endwhile;
			endif;
        ?>

        <?php get_template_part( 'template-parts/footer-callout' );?>

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
