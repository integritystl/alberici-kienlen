<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package alberici-hillsdale
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php alberici_hillsdale_post_thumbnail(); ?>

	<?php if ( get_the_content() ) { ?>
		<div class="entry-content">
			<?php
			the_content();
			?>
		</div><!-- .entry-content -->
	<?php } ?>


</article><!-- #post-<?php the_ID(); ?> -->
