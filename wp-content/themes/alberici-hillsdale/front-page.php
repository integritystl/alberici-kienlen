<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package alberici-hillsdale
 */

get_header();
$HeroImage = get_field('homepage_hero_featured_image');
$HeroHeadline = get_field('homepage_hero_title');
$HeroContent = get_field('homepage_hero_content');
$HeroButtonText = get_field('homepage_hero_button_text');
$HeroButtonLink = get_field('homepage_hero_button_link');
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<?php if ($HeroHeadline): ?>
				<div class="homepage-hero hero-image" style="background-image: url(<?php if ($HeroImage): echo $HeroImage; endif; ?>);">
					<div class="container">
						<h1><?php echo $HeroHeadline; ?></h1>
						<p><?php echo $HeroContent; ?></p>
						<?php if ($HeroButtonText): ?>
							<a href="<?php echo $HeroButtonLink; ?>"/><?php echo $HeroButtonText; ?> </a>
						<?php endif; ?>
					</div>
				</div>
			<?php endif; ?>

		<?php
			if(have_rows('flexible_content', get_the_ID())):
				while(have_rows('flexible_content')): the_row();
					include(locate_template('template-parts/flex-content/content-' . get_row_layout() . '.php'));
				endwhile;
			endif;
		?>


			<?php $the_query = new WP_Query( 'posts_per_page=3' ); ?>
			<?php if ( $the_query -> have_posts() ): ?>
			<?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
			<div class="news container">
				<ul class="blog-content_posts">
					<li class="post" style="background-image:url('<?php the_post_thumbnail_url(); ?>');">
						<a href="<?php the_permalink() ?>" >
						<span class="news-meta">
							<span class="news-category">
								<?php
								$category = get_the_category();
								echo $category[0]->cat_name;
							?>
							</span>
							<h3 class="news-name"><?php the_title();?></h3>
						</a>
					</li>
				</ul>

			
			<?php
			endwhile;
			wp_reset_postdata();
			endif;
			?>
			<a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>">VIEW MORE NEWS </a>
			</div>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
