<?php
/**
*
* Component for image text callout. Includes image, text, text area, button and button link
*
**/
$imageTextImage = get_sub_field('image');
$imageTextHeader = get_sub_field('header');
$imageTextContent = get_sub_field('content');
$imageTextButtonText = get_sub_field('button_text');
$imageTextButtonLink = get_sub_field('button_link');
?>
<div class="flex_image_text">
  <div class="container">
    <div class="image-text_content">
        <h2><?php echo $imageTextHeader; ?></h2>
        <?php echo $imageTextContent; ?>
        <?php if ($imageTextButtonText): ?>
            <a href="<?php echo $imageTextButtonLink; ?>" class="btn"><?php echo $imageTextButtonText; ?></a>
        <?php endif; ?>
    </div>
  </div>
  <div class="image-text_img">
      <?php echo wp_get_attachment_image($imageTextImage, 'full'); ?>
  </div>
</div>
