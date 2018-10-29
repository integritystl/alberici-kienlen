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
$FooterCalloutBackImage = get_field('footer_callout_background_image');
?>

<?php if ($FooterCalloutContent || $FooterCalloutHeadline) : ?>
<div class="footer-callout clear">
    <div class="footer-callout-content container">
        <h2><?php echo $FooterCalloutHeadline; ?></h2>
        <p><?php echo $FooterCalloutContent; ?></p>
        <?php if ($FooterCalloutText) : ?>
            <a href="<?php echo $FooterCalloutLink; ?>" class="btn"><?php echo $FooterCalloutText; ?></a>
        <?php endif; ?>
    </div>

    <div class="footer-callout-img">
      <?php echo wp_get_attachment_image($FooterCalloutBackImage, 'full'); ?>
    </div>
</div>
<?php endif; ?>