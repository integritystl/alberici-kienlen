<?php
/**
 * The template for displaying single market
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package alberici-hillsdale
 */

get_header();
$HeroImage = get_field('general_hero_featured_image');
$theme_config = get_field('set_site', 'options');
?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">
		<?php
		if ( have_posts() ) :
			while ( have_posts() ) :
				the_post();?>
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<?php get_template_part( 'template-parts/hero' );?>

					<div class="market-detail">
						<?php alberici_hillsdale_post_thumbnail(); ?>

						<div class="market-content">
							<?php the_content(); ?>
						</div><!-- .market-content -->
					</div>
				</article><!-- #post--->


			<?php endwhile;
		else :
			get_template_part( 'template-parts/content', 'none' );
		endif; ?>

        <?php if ( is_single() && 'market' === get_post_type()) {
            $term = get_field('project_market_category');
            $latest_args = array(
                'post_type' => 'project',
                'posts_per_page' => 3,
                'post_status' => 'publish',
                'post__not_in' => array( get_the_ID() ),
                'orderby' => 'rand',
                'tax_query' => array(
                    array(
                    'taxonomy' => 'market_category',
                    'field' => 'id',
                    'terms' => $term
                    )
                )
            );
            $latest_query = new WP_Query( $latest_args );
        }

        $sum = $latest_query->found_posts;

        if ( $latest_query->have_posts() ) : ?>
            <div class="markets markets-latest-3 container">
                <h2>Related Projects</h2>
                <?php if ($sum === '2'){?>
                    <div class="card-group blog-content_posts posts_2">
                <?php }elseif ($sum === '1'){ ?>
                    <div class="card-group blog-content_posts posts_1">
                <?php }else{ ?>
                    <div class="card-group blog-content_posts">
                <?php } ?>
                <?php while( $latest_query->have_posts() ) : $latest_query->the_post(); ?>
                    <article class="card-post card-news post">
                        <div class="card-overlay"></div>
                        <?php echo wp_get_attachment_image( get_post_thumbnail_id(get_the_ID()), 'blog_image', false );?>
                        <a href="<?php the_permalink(); ?>">
                            <div class="news-meta">
                                <h3><?php  the_title();?></h3>
                            </div>
                        </a>
                    </article>
                <?php endwhile; ?>
                </div>
                <a href="<?php echo get_field('projects_page_link', 'option'); ?>" class="btn"> view more projects </a>
            </div>
        <?php endif; wp_reset_postdata(); ?>

        <?php if ( $theme_config === 'kienlen') {
            get_template_part( 'template-parts/kienlen-footer-callout' );
        } else {
            get_template_part( 'template-parts/footer-callout' );
        }?>
	</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
