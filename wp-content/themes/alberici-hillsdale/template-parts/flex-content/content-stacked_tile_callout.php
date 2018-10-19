<?php
/**
*
* Component for stacked tile callout. Includes image, text, text area, link
*
**/
?>

<?php if( have_rows('component') ):?>
<div class="flex_stacked_tile container">
<?php while ( have_rows('component') ) : the_row();
    $StackedTileImage = get_sub_field('image');
    $StackedTileHeader = get_sub_field('header');
    $StackedTileContent = get_sub_field('content');
    $StackedTileLink = get_sub_field('link');
?>
  <div class="stacked_tile_single">
    <div class="single_tile_img">
        <?php echo wp_get_attachment_image($StackedTileImage, 'tile_image'); ?>
    </div>
    <div class="single_tile_content">
        <h2><?php echo $StackedTileHeader; ?></h2>
        <p><?php echo $StackedTileContent; ?></p>
    </div>
    <a href="<?php echo $StackedTileLink; ?>" class="btn">Learn More</a>



  </div>
<?php endwhile; ?>

</div>

<?php endif;?>
