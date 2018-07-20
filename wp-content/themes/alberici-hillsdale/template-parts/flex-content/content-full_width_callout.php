<?php
/**
*
* Component for full-width callout. Includes image, text, button and button link
*
**/
?>
<div class="flex_full_width">

  <?php

  the_sub_field('image');
  the_sub_field('header');
  the_sub_field('content');
  the_sub_field('button_text');
  the_sub_field('button_link');
   ?>
</div>
