<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package alberici-hillsdale
 */

$FooterCalloutHeadline = get_field('footer_callout_header');
$FooterCalloutContent = get_field('footer_callout_content');
$FooterCalloutText = get_field('footer_callout_button_text');
$FooterCalloutLink = get_field('footer_callout_button_link');
$FooterCalloutImage = get_field('footer_callout_background_image');
?>

<?php if ($FooterCalloutContent || $FooterCalloutHeadline) : ?>
<div class="footer-callout clear <?php if(!$FooterCalloutImage) { echo 'footer-callout--no-img'; } ?> ">
  <div class="container">
      <div class="footer-callout-content">
          <?php if ($FooterCalloutHeadline) : ?>
            <h2><?php echo $FooterCalloutHeadline; ?></h2>
          <?php endif; ?>
          <?php if ($FooterCalloutContent) : ?>
            <p><?php echo $FooterCalloutContent; ?></p>
          <?php endif; ?>
          <?php if ($FooterCalloutText) : ?>
              <a href="<?php echo $FooterCalloutLink; ?>" class="btn"><?php echo $FooterCalloutText; ?></a>
          <?php endif; ?>
      </div>
      <?php if ($FooterCalloutImage) : ?>
        <div class="footer-callout-image">
          <?php echo wp_get_attachment_image($FooterCalloutImage, 'full'); ?>
        </div>
      <?php endif; ?>
  </div>
</div>
<?php endif; ?>
