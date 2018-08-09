<?php
/**
*
* Component for full-width callout. Includes image, text, button and button link
*
**/

$fullWidthImg =  get_sub_field('image');
$fullWidthHeader =  get_sub_field('header');
$fullWidthContent =   get_sub_field('content');
$fullWidthBtnText = get_sub_field('button_text');
$fullWidthBtnLink =   get_sub_field('button_link');

?>
<div class="flex_full_width">
  <div class="container">
    <div class="full_width_img">
      <?php echo wp_get_attachment_image($fullWidthImg, 'large');  ?>
    </div>
    <div class="full_width_content">
      <h2><?php echo $fullWidthHeader; ?></h2>
      <?php echo $fullWidthContent;?>
       <?php if ($fullWidthBtnText) { ?>
         <a href="<?php echo $fullWidthBtnLink; ?>"><?php echo $fullWidthBtnText; ?></a>
       <?php } ?>
     </div>
 </div>
</div>
