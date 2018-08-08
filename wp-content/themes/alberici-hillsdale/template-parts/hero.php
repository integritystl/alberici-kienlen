<?php
/**
 * Template part for displaying global hero area
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package alberici-hillsdale
 */

$GlobalHeroImage = get_field('general_hero_featured_image');
$GlobalHeroHeadline = get_field('general_hero_title');
?>

<?php if ($GlobalHeroHeadline): ?>
    <div class="hero-area container" style="background-image: url( <?php if ($GlobalHeroImage): echo $GlobalHeroImage; endif; ?> );">
        <h1><?php echo $GlobalHeroHeadline; ?></h1>
    </div>
<?php endif; ?>