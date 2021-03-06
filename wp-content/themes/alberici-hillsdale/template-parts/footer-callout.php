<?php
/**
 * Template part for displaying footer callout
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
$feat_image_url = wp_get_attachment_url( $FooterCalloutImage );
?>

<?php if ($FooterCalloutContent || $FooterCalloutHeadline) : ?>
<div class="footer-callout clear <?php if(!$FooterCalloutImage) { echo 'footer-callout--no-img'; } ?> " style="background: url('<?php echo $feat_image_url;?>')no-repeat center center; background-size:cover;">
  <div class="container">
      <div class="footer-callout-content">
        <div class="footer-callout-white-wrapper">
          <?php if ($FooterCalloutHeadline) : ?>
            <h2><?php echo $FooterCalloutHeadline; ?></h2>
          <?php endif; ?>
          <?php if ($FooterCalloutContent) : ?>
            <p><?php echo $FooterCalloutContent; ?></p>
          <?php endif; ?>
        </div>
          <?php if ($FooterCalloutText) : ?>
              <a href="<?php echo $FooterCalloutLink; ?>" class="btn"><?php echo $FooterCalloutText; ?></a>
          <?php endif; ?>
      </div>
  </div>
  <div class="footer-callout_overlay"></div>
</div>
<?php endif; ?>
