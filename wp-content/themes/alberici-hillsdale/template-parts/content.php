<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package alberici-hillsdale
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		if ( is_singular() && 'post' === get_post_type() ) :
			the_title( '<h1 class="entry-title">', '</h1>' ); ?>
			<div class="entry-meta">
				<p class="post-date">
					<?php alberici_hillsdale_posted_on(); ?>
					<span classs="post-category"><?php echo get_the_category_list(' | '); ?></span>
				</p>
			</div>
		<?php 
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
			<span class="post-category"><?php echo get_the_category_list(' | '); ?></span>
			<span class="post-date">Posted on <?php alberici_hillsdale_posted_on(); ?></span>
		<?php endif; ?>
	</header><!-- .entry-header -->

	<?php alberici_hillsdale_post_thumbnail(); ?>

	<div class="entry-content">
		<?php
		if ( is_single() ) :
			the_content( sprintf(
				/* translators: %s: Name of current post. */
				wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', '_s' ), array( 'span' => array( 'class' => array() ) ) ),
				the_title( '<span class="screen-reader-text">"', '"</span>', false )
			) );
		else:
			the_excerpt();
		endif;


			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', '_s' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
