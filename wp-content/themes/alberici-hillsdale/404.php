<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package alberici-hillsdale
 */

get_header();

$heroImage = get_field('404_hero_featured_image', 'option');
$heroHeadline = get_field('404_hero_title', 'option');
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<section class="error-404 not-found">
				<?php if ($heroHeadline): ?>
					<div class="hero-area" style="background-image: url( <?php if ($heroImage): echo $heroImage; endif; ?> );">
							<h1><?php echo $heroHeadline; ?></h1>
							<div class="hero-overlay"></div>
					</div>
				<?php endif; ?>

				<div class="page-content container">
					<?php the_field('404_page','option'); ?>
				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
