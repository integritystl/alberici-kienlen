<?php
/**
*
* Component for 50/50 callout. Includes alignment radio (so we can add a class) image, & WizzyWig
*
**/

$calloutImgAlignment = get_sub_field('image_alignment');
$calloutImg = get_sub_field('image');
$calloutContent = get_sub_field('content');
?>
<div class="flex_fifty_fifty container img-<?php echo $calloutImgAlignment;?>">
  <div class="fifty-fifty_img">
    <?php echo wp_get_attachment_image($calloutImg, 'large');  ?>
  </div>
  <div class="fifty-fifty_content">
    <?php echo $calloutContent; ?>
  </div>
</div>
