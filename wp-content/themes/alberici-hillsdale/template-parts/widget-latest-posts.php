<?php
/**
 * Template part for displaying latest news posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package _s
 */

?>
<?php

  //Single Post: All Related Tags/Categories
  if ( is_single() && 'post' === get_post_type()) {
    $terms = get_the_terms( get_the_ID(), 'category' );
    $term_list = wp_list_pluck( $terms, 'slug' );
    $latest_args = array(
    	'post_type' => 'post',
    	'posts_per_page' => 3,
    	'post_status' => 'publish',
    	'post__not_in' => array( get_the_ID() ),
    	'orderby' => 'rand',
    	'tax_query' => array(
    		array(
    			'taxonomy' => 'category',
    			'field' => 'slug',
    			'terms' => $term_list
    		)
    	)
    );
  }

  //Default: Show Latest 3 Posts
  if(empty($latest_args)) {
    $latest_args = array(
      'post_type' =>  'post',
      'posts_per_page' => 3,
    );
  }

  $latest_query = new WP_Query( $latest_args );
  if ( $latest_query->have_posts() ) :
?>
<ul>
  <?php while( $latest_query->have_posts() ) : $latest_query->the_post();
    $categories = get_the_category();
    $category_names = '';

    if ( ! empty( $categories ) ) {
      foreach($categories as $category) {
        $category_names .= $category->name . ' ';
      }
    }
  ?>
  <li>
    <a href="<?php the_permalink(); ?>">
      <span class="post-title"><?php the_title(); ?></span>
      <!-- <span class="post-category"><?//php echo $category_names; ?></span> -->
      <!-- <span class="post-date">Posted on <?php //echo the_time('m/d/Y') ?></span> -->
    </a>
  </li>
  <?php endwhile; ?>
</ul>
<?php endif; wp_reset_postdata(); ?>
