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
		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();