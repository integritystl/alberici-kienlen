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
<div class="footer-callout" style="background-image: url(<?php echo $FooterCalloutBackImage; ?>);">
    <div class="footer-callout-content">
        <h2><?php echo $FooterCalloutHeadline; ?></h2>
        <p><?php echo $FooterCalloutContent; ?></p>
    </div>

    <?php if ($FooterCalloutText) : ?>
        <a href="<?php echo $FooterCalloutLink; ?>" class="btn"><?php echo $FooterCalloutText; ?></a>
    <?php endif; ?>
</div>
<?php endif; ?>