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
			<?php
			//if flag is news, use a news-based data-att value. Otherwise add different one.
			//Market as a custom taxonomy is on both Projects and News. The other filter varies.
			if ($postDataType === 'is_news') {
				$postData = 'news';
				$filterCat = 'service';
			} else {
				//assume it's Projects
				$postData = 'projects';
				$filterCat = 'location';
			}
			?>
			<div id="news_app" data-post="<?php echo $postData; ?>" data-filter="<?php echo $filterCat; ?>" data-market="market"></div>
	</div>
</div>


<?php
endwhile;
endif;

get_footer();
