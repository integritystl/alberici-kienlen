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
    <?php if ($StackedTileImage) : ?>
      <div class="single_tile_img">
          <?php echo wp_get_attachment_image($StackedTileImage, 'tile-image'); ?>
      </div>
    <?php endif; ?>

    <div class="single_tile_content">
      <?php if ($StackedTileHeader) : ?>
        <h2><?php echo $StackedTileHeader; ?></h2>
      <?php endif; ?>
      <?php if ($StackedTileContent) : ?>
        <p><?php echo $StackedTileContent; ?></p>
      <?php endif; ?>
    </div>

    <?php if ($StackedTileLink) : ?>
      <a href="<?php echo $StackedTileLink; ?>" class="btn">Learn More</a>
    <?php endif; ?>

  </div>
<?php endwhile; ?>

</div>

<?php endif;?>
