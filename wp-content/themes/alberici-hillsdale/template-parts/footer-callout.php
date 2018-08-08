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
<div class="footer-callout container" style="background-image: url(<?php echo $FooterCalloutBackImage; ?>); background-color:">
    <h2><?php echo $FooterCalloutHeadline; ?></h2>
    <div calss="footer-callout-content">
        <?php echo $FooterCalloutContent; ?>
    </div>

    <?php if ($FooterCalloutText) : ?>
    <div class="footer-callout-button">
        <a href="<?php echo $FooterCalloutLink; ?>" class="btn"><?php echo $FooterCalloutText; ?></a>
    </div>
    <?php endif; ?>
</div>
<?php endif; ?>