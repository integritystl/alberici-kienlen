<?php
/**
 * Template Name: Projects List
 *
 * This template renders the Projects Post Types through a small React App
 *
 * @package alberici-hillsdale
 */

get_header();
	if(have_posts()): while(have_posts()): the_post();
?>

<div class="page_container">
	<div id="primary" class="content-area">
			<div id="projects_app"></div>
	</div>
</div>


<?php
endwhile;
endif;

get_footer();
