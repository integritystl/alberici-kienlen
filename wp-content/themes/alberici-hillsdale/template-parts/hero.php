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
    <div class="hero-area" style="background-image: url( <?php if ($GlobalHeroImage): echo $GlobalHeroImage; endif; ?> );">
            <h1><?php echo $GlobalHeroHeadline; ?></h1>
            <div class="hero-overlay"></div>
    </div>
<?php endif; ?>
<nav class="breadcrumbs container" aria-label="Breadcrumb navigation">
    <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
        <?php if(function_exists('bcn_display'))
        {
            bcn_display();
        }?>
    </div>
</nav>
