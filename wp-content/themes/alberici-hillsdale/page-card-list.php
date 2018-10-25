<?php
/**
 * Template Name: Card List View
 *
 * This template renders Projects/Posts through a small React App.
 * A setting in the WP Admin in an ACF buttion field determines the data passed to it.
 *
 * @package alberici-hillsdale
 */

$postDataType =	get_field('post_list_data_type');

get_header();
	if(have_posts()): while(have_posts()): the_post();
?>

<div class="page_container">
	<div id="primary" class="content-area">
			<?php get_template_part( 'template-parts/hero' );?>
			<?php
			//If flag is news, use a news-based data-att value. Otherwise add different one.
			//Market as a custom taxonomy is on both Projects and News. The other filter varies.
			if ($postDataType === 'is_news') {
				$postData = 'news';
				$filterCat = 'service';
				$totalPosts = wp_count_posts();
			} else {
				//assume it's Projects
				$postData = 'projects';
				$filterCat = 'location';
				$totalPosts = wp_count_posts('project');
			}
			?>
			<div id="cardList_app" data-post="<?php echo $postData; ?>" data-filter="<?php echo $filterCat; ?>" data-total="<?php echo $totalPosts->publish; ?>"></div>
	</div>
</div>


<?php
endwhile;
endif;

get_footer();
